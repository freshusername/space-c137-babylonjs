window.addEventListener("DOMContentLoaded", () => {
  //**************** Scene ****************//
  const canvas = document.getElementById("renderCanvas");
  const engine = new BABYLON.Engine(canvas, true);
  const scene = new BABYLON.Scene(engine);

  //**************** Camera ****************//
  const camera = new BABYLON.ArcRotateCamera(
    "Camera",
    1.2,
    1.1,
    220,
    BABYLON.Vector3.Zero(),
    scene
  );
  camera.attachControl(canvas);
  //****************************************************************//
  //**************** Light ****************//
  const light = new BABYLON.HemisphericLight(
    "light1",
    new BABYLON.Vector3(0, 1, 0),
    scene
  );
  light.intensity = 0.5;
  light.groundColor = new BABYLON.Color3(1, 1, 2);
  scene.clearColor = new BABYLON.Color3(0, 0, 0);
  //***************************************//

  //**************** Планети *************//
  //**************** Sun ****************//
  const sunMaterial = new BABYLON.StandardMaterial("sunMaterial", scene);
  sunMaterial.emissiveTexture = new BABYLON.Texture(
    "assets/images/beer.jpg",
    scene
  );
  sunMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  sunMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  //**************** Earth ****************//
  const earthMaterial = new BABYLON.StandardMaterial("earthMat", scene);
  earthMaterial.diffuseTexture = new BABYLON.Texture(
    "assets/images/earthmap1k.jpg",
    scene
  );
  earthMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  //**************** Moon ****************//
  const moonMaterial = new BABYLON.StandardMaterial("moonMat", scene);
  moonMaterial.diffuseTexture = new BABYLON.Texture(
    "assets/images/moon.jpg",
    scene
  );
  moonMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  //******************************************//

  //**************** my skins ****************//

  var lightWoodSkin = new BABYLON.StandardMaterial("lightWoodSkin", scene);
  lightWoodSkin.diffuseTexture = new BABYLON.Texture(
    "assets/images/lightwood.jpg",
    scene
  );

  var benchSit = BABYLON.MeshBuilder.CreateBox(
    "benchSit",
    {
      height: 0.3,
      width: 3,
      depth: 10
    },
    scene
  );
  var benchBack1 = BABYLON.MeshBuilder.CreateBox(
    "benchBack1",
    {
      height: 0.2,
      width: 1.0,
      depth: 10
    },
    scene
  );
  var benchBack2 = BABYLON.MeshBuilder.CreateBox(
    "benchBack2",
    {
      height: 0.2,
      width: 1.0,
      depth: 10
    },
    scene
  );
  var benchStand1 = BABYLON.MeshBuilder.CreateBox(
    "benchStand1",
    {
      height: 4.1,
      width: 0.5,
      depth: 0.5
    },
    scene
  );
  var benchStand2 = BABYLON.MeshBuilder.CreateBox(
    "benchStand2",
    {
      height: 4.1,
      width: 0.5,
      depth: 0.5
    },
    scene
  );
  var benchStand3 = BABYLON.MeshBuilder.CreateBox(
    "benchStand2",
    {
      height: 1.5,
      width: 0.5,
      depth: 0.5
    },
    scene
  );
  var benchStand4 = BABYLON.MeshBuilder.CreateBox(
    "benchStand2",
    {
      height: 1.5,
      width: 0.5,
      depth: 0.5
    },
    scene
  );
  var benchStand11 = BABYLON.MeshBuilder.CreateBox(
    "benchStand2",
    {
      height: 1.5,
      width: 0.5,
      depth: 0.5
    },
    scene
  );
  var benchStand22 = BABYLON.MeshBuilder.CreateBox(
    "benchStand2",
    {
      height: 1.5,
      width: 0.5,
      depth: 0.5
    },
    scene
  );
  var coneMain = BABYLON.MeshBuilder.CreateCylinder(
    "coneMain",
    {
      diameter: 1.5,
      height: 1.7,
      tessellation: 0
    },
    scene
  );
  var coneBottom = BABYLON.MeshBuilder.CreateCylinder(
    "coneBottom",
    {
      diameter: 2.2,
      height: 0.08,
      tessellation: 0
    },
    scene
  );

  coneMain.setPositionWithLocalVector(new BABYLON.Vector3(0, 1.0, 0));
  coneBottom.setPositionWithLocalVector(new BABYLON.Vector3(0, 0.2, 0));
  benchBack1.rotation.z = 1.2;
  benchBack1.setPositionWithLocalVector(new BABYLON.Vector3(2.9, -1.1, 0));
  benchBack2.rotation.z = 1.2;
  benchBack2.setPositionWithLocalVector(new BABYLON.Vector3(1.5, -1.1, 0));
  benchStand2.rotation.y = 0;
  benchStand1.setPositionWithLocalVector(new BABYLON.Vector3(1.725, 0.65, 4));
  benchStand2.setPositionWithLocalVector(new BABYLON.Vector3(1.725, 0.65, -4));
  benchStand11.setPositionWithLocalVector(new BABYLON.Vector3(0.95, -0.65, -4));
  benchStand22.setPositionWithLocalVector(new BABYLON.Vector3(0.95, -0.65, 4));
  benchStand3.setPositionWithLocalVector(new BABYLON.Vector3(-1.1, -0.65, 4));
  benchStand4.setPositionWithLocalVector(new BABYLON.Vector3(-1.1, -0.65, -4));

  benchStand1.rotation.z = -Math.PI / 8;
  benchStand2.rotation.z = -Math.PI / 8;

  benchBack1.material = lightWoodSkin;

  var bench = BABYLON.Mesh.MergeMeshes(
    [
      benchBack1,
      benchBack2,
      benchSit,
      benchStand1,
      benchStand11,
      benchStand2,
      benchStand22,
      benchStand3,
      benchStand4
    ],
    true,
    false,
    null,
    true,
    true
  );

  //****************************************************************//

  //**************** Bench ****************//

  //********************************//

  //**************** Model ****************//

  //**************** Sun ****************//
  const sun = BABYLON.Mesh.CreateSphere("sun", 16, 50, scene);
  sun.material = sunMaterial;

  //*************************Earth****************//
  const earth = BABYLON.Mesh.CreateSphere("earth", 16, 20, scene);
  earth.position.x = 55;
  earth.position.z = 55;
  earth.material = earthMaterial;
  earth.orbit = {
    radius: 100,
    //90 sec
    speed: 0.0012,
    angle: 0
  };

  //**************************** Bench ************************//
  bench.parent = earth;
  bench.position.x = 0;
  bench.position.z = 0;
  //bench.material = benchMat;
  bench.orbit = {
    radius: 60,
    //7 sec
    speed: 0.015,
    angle: 0
  };

  //***************************** Moon ***************************//
  const moon = BABYLON.Mesh.CreateSphere("moon", 16, 10, scene);
  moon.material = moonMaterial;
  moon.parent = earth;
  moon.position.x = 0;
  moon.position.z = 0;
  moon.orbit = {
    radius: 50,
    //15 sec
    speed: 0.007,
    angle: 0
  };

  //**************** Skybox ****************//
  //skybox
  const skybox = BABYLON.Mesh.CreateBox("skybox", 1000, scene);
  const skyboxMaterial = new BABYLON.StandardMaterial("skyboxMat", scene);
  skyboxMaterial.backFaceCulling = false;
  skybox.infiniteDistance = true;
  skybox.material = skyboxMaterial;
  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
    "assets/images/skybox",
    scene
  );
  skyboxMaterial.reflectionTexture.coordinatesMode =
    BABYLON.Texture.SKYBOX_MODE;
  //****************************************************************//

  //**************** Animation ****************//
  var alpha = 0;
  var alpha1 = 0;
  scene.beforeRender = function() {
    //rotate sun
    sun.rotate(BABYLON.Axis.Y, 0.0035, BABYLON.Space.LOCAL);

    //rotate earth
    //earth.rotate(BABYLON.Axis.X, 0.0035, BABYLON.Space.WORLD);
    earth.position.x = earth.orbit.radius * Math.sin(earth.orbit.angle);
    earth.position.z = earth.orbit.radius * Math.cos(earth.orbit.angle);
    earth.orbit.angle += earth.orbit.speed;

    //rotate bench
    bench.position.x = bench.orbit.radius * Math.sin(bench.orbit.angle);
    bench.position.z = bench.orbit.radius * Math.cos(bench.orbit.angle);
    bench.orbit.angle += bench.orbit.speed;
    //bench.position = new BABYLON.Vector3(23 * Math.sin(alpha), bench.position.z, 23 * Math.cos(alpha));
    bench.rotate(BABYLON.Axis.X, 0.0065, BABYLON.Space.LOCAL);

    // rotate moon / distance from earth / speed of moon
    moon.position.z = moon.orbit.radius * Math.sin(moon.orbit.angle);
    moon.position.y = moon.orbit.radius * Math.cos(moon.orbit.angle);
    moon.orbit.angle += moon.orbit.speed;
    // moon.position = new BABYLON.Vector3(33 * Math.sin(alpha1), moon.parent.position.y, 33 * Math.cos(alpha1));
    moon.rotate(BABYLON.Axis.Y, 0.0035, BABYLON.Space.LOCAL);

    alpha1 += 0.03;
    alpha += 0.04;
  };

  document.getElementById("StaticCamera").onclick = function() {
    scene.activeCamera = camera;
  };

  document.getElementById("DynamicCamera").onclick = function() {
    setTimeout(function() {
      var dynamicCam = new BABYLON.FollowCamera(
        "FollowCam",
        new BABYLON.Vector3(0, 0, 25),
        scene
      );

      dynamicCam.radius = 150;

      // The goal height of camera above local origin (centre) of target
      dynamicCam.heightOffset = 3;

      // The goal rotation of camera around local origin (centre) of target in x y plane
      dynamicCam.rotationOffset = 1;

      //Acceleration of camera in moving from current to goal position
      dynamicCam.cameraAcceleration = 0.005;

      //The speed at which acceleration is halted
      dynamicCam.maxCameraSpeed = 30;

      //camera.target is set after the target's creation

      // This attaches the camera to the canvas
      dynamicCam.attachControl(canvas, true);
      dynamicCam.lockedTarget = sun;
      scene.activeCamera = dynamicCam;
    });

    setTimeout(function() {
      var dynamicCam = new BABYLON.FollowCamera(
        "FollowCam",
        new BABYLON.Vector3(10, 10, 20),
        scene
      );

      dynamicCam.radius = 40;

      dynamicCam.heightOffset = 3;

      dynamicCam.rotationOffset = 1;

      dynamicCam.cameraAcceleration = 0.01;

      dynamicCam.maxCameraSpeed = 30;

      dynamicCam.attachControl(canvas, true);
      dynamicCam.lockedTarget = earth;
      scene.activeCamera = dynamicCam;
    }, 5000);

    setTimeout(function() {
      var dynamicCam = new BABYLON.FollowCamera(
        "FollowCam",
        new BABYLON.Vector3(0, 0, 20),
        scene
      );

      dynamicCam.radius = 3;

      dynamicCam.heightOffset = 3;

      dynamicCam.rotationOffset = 1;

      dynamicCam.cameraAcceleration = 0.005;

      dynamicCam.maxCameraSpeed = 10;

      dynamicCam.attachControl(canvas, true);
      dynamicCam.lockedTarget = bench;
      scene.activeCamera = dynamicCam;
    }, 10000);

    setTimeout(function() {
      var dynamicCam = new BABYLON.FollowCamera(
        "FollowCam",
        new BABYLON.Vector3(0, 0, 15),
        scene
      );

      dynamicCam.radius = 2;

      dynamicCam.heightOffset = 1;

      dynamicCam.rotationOffset = 1;

      dynamicCam.cameraAcceleration = 0.005;

      dynamicCam.maxCameraSpeed = 10;

      dynamicCam.attachControl(canvas, true);
      dynamicCam.lockedTarget = moon;
      scene.activeCamera = dynamicCam;
    }, 15000);
  };

  // document.getElementById("RefreshButton").onclick = function () {
  //     Refresh();
  // };

  engine.runRenderLoop(function() {
    scene.render();
  });

  // the canvas/window resize event handler
  window.addEventListener("resize", function() {
    engine.resize();
  });
});
