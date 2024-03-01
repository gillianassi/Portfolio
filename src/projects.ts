import { FaGamepad, FaSteam, FaAndroid } from "svelte-icons/fa";
import { IoIosPaper, IoMdCloudDownload } from "svelte-icons/io";
import { DiUnitySmall, DiVisualstudio, DiGithubBadge } from "svelte-icons/di";
import { FaVrCardboard, FaItchIo } from "svelte-icons/fa";

// Import Markdowns here:
// project
import MetroidMd from "./markdown/projects/metroid.md";
import GEngineMd from "./markdown/projects/GEngine.md";
import DiffusePathTracerMd from "./markdown/projects/DiffusePathTracer.md";
import WindwakerMd from "./markdown/projects/WindWakerRemake.md";
import MetroAwakeningMd from "./markdown/projects/MetroAwakening.md";
import DreamBrightMd from "./markdown/projects/DreamBright.md";
import TreeUphMd from "./markdown/projects/TreeUmph.md";
import NotForSaleMd from "./markdown/projects/NotForSale.md";
import RasterizerMd from "./markdown/projects/Rasterizer.md";
import RayTracerMd from "./markdown/projects/RayTracer.md";
import DirectX12Md from "./markdown/projects/DirectX12.md";
// research
import RegressionMd from "./markdown/Research/Regression.md";
import HandPoseDetectionMd from "./markdown/Research/GestureRecognition.md";
import KeccakSpongeMD from "./markdown/Research/KeccakSponge.md";
import PlenopticImagingMd from "./markdown/Research/PlenopticImaging.md";

export const projects = [
  {
    title: "Projects",
    icon: FaGamepad,
    projects: [
      {
        image:
          "https://ik.imagekit.io/gillianassi/Tumbnails/ioi_MFmwPZP-H.jpg?updatedAt=1708988753719",
        banner:
          "https://ik.imagekit.io/gillianassi/Projects/Diffuse_PathTracer/Piano_PT_ALeD8lbrl.png?updatedAt=1708990451142",

        title: "Diffuse Path Tracer",
        markdown: DiffusePathTracerMd,
        tags: ["C++", "Glacier2", DiVisualstudio],
        desc: "Graphics Programming, Diffuse Path Tracer",
        featured: true,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Projects/Dream_Bright/BannerCut_xAkqjfw5f.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674942801171",
        banner:
          "https://ik.imagekit.io/gillianassi/Projects/Dream_Bright/Banner_nlqzg2G0P.png?ik-sdk-version=javascript-1.4.3&updatedAt=1674940747096",

        title: "Dream Bright",
        markdown: DreamBrightMd,
        tags: [FaSteam, "UE5", "C++", DiVisualstudio, FaItchIo],
        desc: "Group Project, Complete Game creation",
        featured: true,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Tumbnails/MetroAwakening_Fhz3J0HW2.jpg?updatedAt=1708980713798",
        banner:
          "https://ik.imagekit.io/gillianassi/Projects/Metro%20Awakening%20VR/VG/VGMetroAwakeningBanner(2)_6MwYrrpCx.png?updatedAt=1709248229049",

        title: "Metro Awakening",
        markdown: MetroAwakeningMd,
        tags: ["C++", "UE5", DiVisualstudio],
        desc: "Graphics Programming",
        featured: true,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Projects/WindWakerRemake/LinkPose_wWmkuMK0T.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661690185200",
        banner:
          "https://ik.imagekit.io/gillianassi/Projects/WindWakerRemake/LinkPose_wWmkuMK0T.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661690185200",

        title: "Windwaker Graphics Remake",
        markdown: WindwakerMd,
        tags: ["C++", "Overlord", DiVisualstudio],
        desc: "Graphics Programming, Graphics Recreation",
        featured: true,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Tumbnails/Tree-Umph_Tumbnail_B2Pwf5FwR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743301440",
        title: "Tree-Umph",
        markdown: TreeUphMd,
        tags: ["C#", DiUnitySmall, FaItchIo],
        desc: "Group Project, Game Jam",
        featured: false,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Projects/G-Engine/GEngine_iy-_sjm_p.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661782460626",
        banner:
          "https://ik.imagekit.io/gillianassi/Projects/G-Engine/GEngine_iy-_sjm_p.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661782460626",

        title: "G-Engine",
        markdown: GEngineMd,
        tags: ["C++", DiVisualstudio, DiGithubBadge],
        desc: "Own C++ Game engine",
        featured: false,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Projects/NotForSale/NotForSaleBanner_3ooOZQyqk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657554358362",
        banner:
          "https://ik.imagekit.io/gillianassi/Projects/NotForSale/NotForSaleBanner_3ooOZQyqk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657554358362",

        title: "Not For Sale",
        markdown: NotForSaleMd,
        tags: ["C#", DiUnitySmall, FaItchIo, IoMdCloudDownload],
        desc: "Group Project, Complete Game creation",
        featured: false,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Tumbnails/SuperMetroid_Tumbnail_G5bJHpi5r.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743301465",
        title: "Super Metroid Remake",
        markdown: MetroidMd,
        tags: ["C++", DiVisualstudio, IoMdCloudDownload],
        desc: "Study Game Mechanics",
        featured: false,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Tumbnails/RayTracer_Tumbnail_5VHCJc57U.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743300788",
        title: "Multithreaded Ray Tracer",
        markdown: RayTracerMd,
        tags: ["C++", DiVisualstudio],
        desc: "Graphics Programming, Software Ray Tracing",
        featured: false,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Tumbnails/Rasterizer_Tumbnail_rHaD1v1HQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743300552",
        title: "Software/Hardware rasterizer",
        markdown: RasterizerMd,
        tags: ["C++", DiVisualstudio],
        desc: "Graphics Programming, Rasterisation",
        featured: false,
      },
    ],
  },
  {
    title: "Research",
    icon: IoIosPaper,
    projects: [
      
      {
        banner:
          "https://ik.imagekit.io/gillianassi/Research/GestureRecognition/DemoVideo_-_frame_at_1m4s_EDx1lu4Oj.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674939739407",
        image:
          "https://ik.imagekit.io/gillianassi/Research/GestureRecognition/ThunderStorm_ifTk2teU4R.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1674939739543",
        title: "Complex Gesture Recognition",
        markdown: HandPoseDetectionMd,
        tags: [DiUnitySmall, FaVrCardboard],
        desc: "VR, Oculus SDK, Hand Tracking, Paper",
        featured: false,
      },
      
      {
        image:
          "https://ik.imagekit.io/gillianassi/Research/PlenopticImaging/ActionShotPlenoptic2_rZPlYPhhv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661777233389",
        banner:
          "https://ik.imagekit.io/gillianassi/Research/PlenopticImaging/ActionShotPlenoptic_lk4HpShtB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661777233397",

        title: "VR for subjective evaluations of plenoptic images",
        markdown: PlenopticImagingMd,
        tags: ["C++", DiVisualstudio, FaVrCardboard],
        desc: "VR, Light Fields, Bachelor Thesis",
        featured: false,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Tumbnails/symmetric-key-encryption_ahgxuUyK0.png?updatedAt=1684967849634",
        title: "Efficient Control of Secured WSAN Using a Keccak Sponge",
        markdown: KeccakSpongeMD,
        tags: ["C++", "C#", DiVisualstudio, FaAndroid],
        desc: "Encryption, Master Thesis",
        featured: false,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Research/Regression/Linear-vs-Multiple-Regression-02-min_L9CJMuYX4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661776191112",
        title: "Regression",
        markdown: RegressionMd,
        tags: ["Matlab", DiGithubBadge],
        desc: "Data analysis, Regression",
        featured: false,
      }
    ],
  },
];
