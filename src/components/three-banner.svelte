
<script>
    import {Scene, WebGLRenderer, PerspectiveCamera, PlaneGeometry, MeshBasicMaterial, Mesh, DoubleSide} from 'three';
    import {onMount} from 'svelte';

    let canvas;
    onMount(() => {
      
        const scene = new Scene();
        const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        const renderer = new WebGLRenderer({
            canvas
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);

        const geometry = new PlaneGeometry(window.innerWidth, window.innerHeight);
        const material = new MeshBasicMaterial( {color: 'EEE7F2', side: DoubleSide} );
        const plane = new Mesh( geometry, material );
        scene.add( plane );

        renderer.updateShadowMap();

        renderer.render(scene, camera);
    });
</script>
<div>
   <canvas id="banner" bind:this="{canvas}"></canvas> 
</div>
