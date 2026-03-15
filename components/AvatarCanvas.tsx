"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface AvatarCanvasProps {
  className?: string;
}

export default function AvatarCanvas({ className }: AvatarCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ─── RENDERER ───────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const getSize = () => ({
      w: canvas.offsetWidth || canvas.parentElement?.offsetWidth || 340,
      h: canvas.offsetHeight || canvas.parentElement?.offsetHeight || 400,
    });

    const { w: W, h: H } = getSize();
    renderer.setSize(W, H, false);

    // ─── SCENE / CAMERA ─────────────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 1.2, 6);
    camera.lookAt(0, 0.8, 0);

    // ─── LIGHTING ───────────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.4);
    keyLight.position.set(3, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(512, 512);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x4466ff, 0.4);
    fillLight.position.set(-3, 2, -2);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x0055ff, 0.2);
    rimLight.position.set(0, -2, -4);
    scene.add(rimLight);

    // ─── MATERIALS ──────────────────────────────────────────────────────
    const skinMat = new THREE.MeshStandardMaterial({ color: 0xf5c89a, roughness: 0.6, metalness: 0.0 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.5, metalness: 0.1 });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0x0055ff, roughness: 0.3, metalness: 0.2 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
    const eyeWhiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2 });
    const pupilMat = new THREE.MeshStandardMaterial({ color: 0x111122, roughness: 0.1, metalness: 0.4 });
    const glowMat = new THREE.MeshStandardMaterial({ color: 0x0055ff, emissive: new THREE.Color(0x0044cc), emissiveIntensity: 0.6, roughness: 0.1 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x88aaff, roughness: 0.05, metalness: 0.5, transparent: true, opacity: 0.5 });
    const hairMat = new THREE.MeshStandardMaterial({ color: 0x2a1a0a, roughness: 0.9 });

    // ─── ROOT GROUP ──────────────────────────────────────────────────────
    const root = new THREE.Group();
    scene.add(root);

    // ─── HEAD ───────────────────────────────────────────────────────────
    const headGroup = new THREE.Group();
    root.add(headGroup);
    headGroup.position.y = 1.35;

    const headGeo = new THREE.SphereGeometry(0.52, 32, 32);
    headGeo.applyMatrix4(new THREE.Matrix4().makeScale(1, 1.05, 0.92));
    const head = new THREE.Mesh(headGeo, skinMat);
    head.castShadow = true;
    headGroup.add(head);

    // ─── HAIR ───────────────────────────────────────────────────────────
    const hairGeo = new THREE.SphereGeometry(0.54, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
    hairGeo.applyMatrix4(new THREE.Matrix4().makeScale(1, 1.1, 0.95));
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.y = 0.04;
    hair.castShadow = true;
    headGroup.add(hair);

    const sideHairGeo = new THREE.SphereGeometry(0.3, 16, 16);
    const leftHair = new THREE.Mesh(sideHairGeo, hairMat);
    leftHair.position.set(-0.48, 0.1, 0.0);
    leftHair.scale.set(0.7, 1, 0.8);
    headGroup.add(leftHair);

    const rightHair = new THREE.Mesh(sideHairGeo, hairMat);
    rightHair.position.set(0.48, 0.1, 0.0);
    rightHair.scale.set(0.7, 1, 0.8);
    headGroup.add(rightHair);

    // ─── EYES ───────────────────────────────────────────────────────────
    function makeEye(side: number) {
      const eyeGroup = new THREE.Group();
      const white = new THREE.Mesh(new THREE.SphereGeometry(0.11, 20, 20), eyeWhiteMat);
      eyeGroup.add(white);
      const iris = new THREE.Mesh(new THREE.SphereGeometry(0.075, 16, 16), accentMat);
      iris.position.z = 0.055;
      eyeGroup.add(iris);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.042, 12, 12), pupilMat);
      pupil.position.z = 0.095;
      eyeGroup.add(pupil);
      const glowDot = new THREE.Mesh(new THREE.SphereGeometry(0.018, 8, 8), glowMat);
      glowDot.position.set(0.025, 0.025, 0.11);
      eyeGroup.add(glowDot);
      eyeGroup.position.set(side * 0.19, 0.06, 0.42);
      headGroup.add(eyeGroup);
      return eyeGroup;
    }
    const leftEye = makeEye(-1);
    const rightEye = makeEye(1);

    // ─── EYEBROWS ────────────────────────────────────────────────────────
    function makeBrow(side: number) {
      const geo = new THREE.CylinderGeometry(0.018, 0.015, 0.15, 8);
      const brow = new THREE.Mesh(geo, hairMat);
      brow.rotation.z = side * 0.2;
      brow.position.set(side * 0.19, 0.23, 0.44);
      brow.rotation.x = -0.3;
      headGroup.add(brow);
    }
    makeBrow(-1);
    makeBrow(1);

    // ─── NOSE ────────────────────────────────────────────────────────────
    const noseGeo = new THREE.SphereGeometry(0.055, 12, 12);
    const nose = new THREE.Mesh(noseGeo, skinMat);
    nose.position.set(0, -0.06, 0.49);
    nose.scale.set(0.8, 0.7, 0.8);
    headGroup.add(nose);

    // ─── MOUTH ───────────────────────────────────────────────────────────
    const smileGroup = new THREE.Group();
    smileGroup.position.set(0, -0.2, 0.48);
    headGroup.add(smileGroup);
    for (let i = -2; i <= 2; i++) {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 8), darkMat);
      dot.position.set(i * 0.055, -Math.abs(i) * 0.022, 0);
      smileGroup.add(dot);
    }

    // ─── EARS ────────────────────────────────────────────────────────────
    function makeEar(side: number) {
      const earGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const ear = new THREE.Mesh(earGeo, skinMat);
      ear.position.set(side * 0.5, 0.02, 0);
      ear.scale.set(0.55, 0.7, 0.6);
      headGroup.add(ear);
    }
    makeEar(-1);
    makeEar(1);

    // ─── GLASSES ─────────────────────────────────────────────────────────
    const glassGroup = new THREE.Group();
    headGroup.add(glassGroup);

    function makeLens(side: number) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.018, 8, 24), accentMat);
      ring.position.set(side * 0.21, 0.06, 0.46);
      glassGroup.add(ring);
      const lens = new THREE.Mesh(new THREE.CircleGeometry(0.11, 24), glassMat);
      lens.position.set(side * 0.21, 0.06, 0.455);
      glassGroup.add(lens);
    }
    makeLens(-1);
    makeLens(1);

    const bridge = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.1, 8), accentMat);
    bridge.rotation.z = Math.PI / 2;
    bridge.position.set(0, 0.06, 0.46);
    glassGroup.add(bridge);

    function makeTemple(side: number) {
      const t = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.35, 8), accentMat);
      t.rotation.z = Math.PI / 2;
      t.rotation.y = side * 0.2;
      t.position.set(side * 0.39, 0.06, 0.34);
      glassGroup.add(t);
    }
    makeTemple(-1);
    makeTemple(1);

    // ─── NECK ────────────────────────────────────────────────────────────
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.25, 16), skinMat);
    neck.position.y = 0.74;
    neck.castShadow = true;
    root.add(neck);

    // ─── BODY ────────────────────────────────────────────────────────────
    const bodyGroup = new THREE.Group();
    bodyGroup.position.y = 0.26;
    root.add(bodyGroup);

    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.38, 0.92, 24), darkMat);
    torso.castShadow = true;
    bodyGroup.add(torso);

    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.17, 0.04, 8, 20), whiteMat);
    collar.position.y = 0.43;
    collar.rotation.x = 0.15;
    bodyGroup.add(collar);

    const iconPlate = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.18), accentMat);
    iconPlate.position.set(0, 0.18, 0.4);
    iconPlate.rotation.x = -0.1;
    bodyGroup.add(iconPlate);

    // ─── ARMS ────────────────────────────────────────────────────────────
    function makeArm(side: number) {
      const armGroup = new THREE.Group();

      // Upper arm — shirt color, centered at Y = -0.225 (half of 0.45)
      const upper = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.11, 0.45, 12), darkMat);
      upper.position.set(0, -0.225, 0);
      upper.castShadow = true;
      armGroup.add(upper);

      // Lower arm — skin color, starts at -0.45, centered at -0.625
      const lower = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.085, 0.35, 12), skinMat);
      lower.position.set(0, -0.625, 0);
      lower.castShadow = true;
      armGroup.add(lower);

      // Hand — sits at the bottom of the lower arm
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 12), skinMat);
      hand.position.set(0, -0.88, 0);
      hand.scale.set(1, 0.8, 0.9);
      hand.castShadow = true;
      armGroup.add(hand);

      // Natural outward resting tilt
      armGroup.rotation.z = side * 0.22;
      armGroup.position.set(side * 0.46, 0.3, 0);
      bodyGroup.add(armGroup);
      return armGroup;
    }
    makeArm(-1);
    const rightArm = makeArm(1);

    // ─── FLOOR SHADOW ─────────────────────────────────────────────────────
    const shadowMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.06 });
    const shadowDisc = new THREE.Mesh(
      new THREE.CircleGeometry(0.55, 32),
      shadowMaterial
    );
    shadowDisc.rotation.x = -Math.PI / 2;
    shadowDisc.position.y = -0.86;
    root.add(shadowDisc);

    // ─── PARTICLES ────────────────────────────────────────────────────────
    const particles: THREE.Mesh[] = [];
    const pMat = new THREE.MeshBasicMaterial({ color: 0x0055ff, transparent: true, opacity: 0.5 });
    for (let i = 0; i < 18; i++) {
      const size = Math.random() * 0.025 + 0.008;
      const p = new THREE.Mesh(new THREE.SphereGeometry(size, 6, 6), pMat.clone());
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 1.1 + 0.5;
      p.position.set(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 2.8,
        Math.sin(angle) * radius * 0.4 - 0.6
      );
      p.userData = {
        originX: p.position.x,
        originY: p.position.y,
        originZ: p.position.z,
        speed: Math.random() * 0.6 + 0.3,
        phase: Math.random() * Math.PI * 2,
      };
      scene.add(p);
      particles.push(p);
    }

    // ─── MOUSE TRACKING & INTERACTION ─────────────────────────────────────
    let mouseNX = 0;
    let mouseNY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseNX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    const onMouseLeave = () => {
      mouseNX = 0;
      mouseNY = 0;
    };

    // ─── WAVE ANIMATION ────────────────────────────────────────────────────
    let waving = false;
    let waveT = 0;

    const onMouseEnter = () => {
      waving = true;
      waveT = 0;
    };

    // ─── SPIN INTERACTION ──────────────────────────────────────────────────
    let currentSpin = 0;
    let targetSpin = 0;
    const onClick = () => {
      targetSpin += Math.PI * 2;
    };

    // ─── BLINK STATE ───────────────────────────────────────────────────────
    let blinkTime = 0;

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("mouseenter", onMouseEnter);
    canvas.addEventListener("click", onClick);

    // ─── ANIMATION LOOP ────────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let animId: number;

    function animate() {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Idle floating
      const floatY = Math.sin(t * 1.1) * 0.07;
      root.position.y = floatY;

      // Dynamic Shadow
      shadowDisc.scale.setScalar(1 - floatY * 2);
      shadowMaterial.opacity = 0.06 - floatY * 0.3;

      // Spin logic
      currentSpin += (targetSpin - currentSpin) * 0.08;
      root.rotation.y = Math.sin(t * 0.4) * 0.05 + currentSpin;

      // Breathing
      bodyGroup.scale.x = 1 + Math.sin(t * 1.3) * 0.008;
      bodyGroup.scale.z = 1 + Math.sin(t * 1.3) * 0.008;

      // Head follows mouse with smooth lag
      const targetHeadRotY = mouseNX * 0.38;
      const targetHeadRotX = mouseNY * 0.22;
      headGroup.rotation.y += (targetHeadRotY - headGroup.rotation.y) * 0.06;
      headGroup.rotation.x += (targetHeadRotX - headGroup.rotation.x) * 0.06;

      // Eyes track cursor
      const eyeShiftX = mouseNX * 0.025;
      const eyeShiftY = mouseNY * 0.018;
      leftEye.children[2].position.x = eyeShiftX;
      leftEye.children[2].position.y = eyeShiftY;
      rightEye.children[2].position.x = eyeShiftX;
      rightEye.children[2].position.y = eyeShiftY;
      leftEye.children[1].position.x = eyeShiftX * 0.7;
      leftEye.children[1].position.y = eyeShiftY * 0.7;
      rightEye.children[1].position.x = eyeShiftX * 0.7;
      rightEye.children[1].position.y = eyeShiftY * 0.7;

      // Blink Logic
      blinkTime += 0.016;
      if (blinkTime > 3.5) blinkTime = 0;

      let blinkScale = 1;
      if (blinkTime < 0.1) {
        blinkScale = 1 - blinkTime / 0.1;
      } else if (blinkTime < 0.2) {
        blinkScale = (blinkTime - 0.1) / 0.1;
      }

      leftEye.scale.y = Math.max(0.05, blinkScale);
      rightEye.scale.y = Math.max(0.05, blinkScale);

      // Wave animation
      if (waving) {
        waveT += 0.05;
        const raiseAngle = Math.min(waveT / 1.0, 1.0) * 2.8;
        rightArm.rotation.z = raiseAngle;
        rightArm.rotation.x = Math.sin(waveT * 8) * 0.4;
        if (waveT > Math.PI * 2.0) {
          waving = false;
        }
      } else {
        // Smoothly return to natural resting tilt
        rightArm.rotation.z += (0.22 - rightArm.rotation.z) * 0.05;
        rightArm.rotation.x += (0 - rightArm.rotation.x) * 0.05;
      }

      // Animate particles
      particles.forEach((p) => {
        const { speed, phase, originX, originY } = p.userData;
        p.position.y = originY + Math.sin(t * speed + phase) * 0.18;
        p.position.x = originX + Math.cos(t * speed * 0.7 + phase) * 0.08;
        (p.material as THREE.MeshBasicMaterial).opacity = 0.25 + Math.sin(t * speed + phase) * 0.25;
      });

      renderer.render(scene, camera);
    }

    animate();

    // ─── RESIZE OBSERVER ──────────────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      const { w, h } = getSize();
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    // ─── CLEANUP ──────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("mouseenter", onMouseEnter);
      canvas.removeEventListener("click", onClick);
      ro.disconnect();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`cursor-pointer ${className || ""}`}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
