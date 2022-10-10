import { FaGamepad } from "svelte-icons/fa";
import { IoIosPaper, IoMdCloudDownload } from "svelte-icons/io";
import { DiUnitySmall, DiVisualstudio, DiGithubBadge } from "svelte-icons/di";
import { FaVrCardboard, FaItchIo } from "svelte-icons/fa";

// Import Markdowns here:
// project
import MetroidMd from "./markdown/projects/metroid.md";
import GEngineMd from "./markdown/projects/GEngine.md";
import WindwakerMd from "./markdown/projects/WindWakerRemake.md";
import TreeUphMd from "./markdown/projects/TreeUmph.md";
import NotForSaleMd from "./markdown/projects/NotForSale.md";
import RasterizerMd from "./markdown/projects/Rasterizer.md";
import RayTracerMd from "./markdown/projects/RayTracer.md";
import DirectX12Md from "./markdown/projects/DirectX12.md";
// research
import RegressionMd from "./markdown/Research/Regression.md";
import HandPoseDetectionMd from "./markdown/Research/HandPoseDetection.md";
import LockFreeMd from "./markdown/Research/LockFreeOrderedList.md";
import PlenopticImagingMd from "./markdown/Research/PlenopticImaging.md";

export const projects = [
  {
    title: "Projects",
    icon: FaGamepad,
    projects: [
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
          "https://ik.imagekit.io/gillianassi/Projects/WindWakerRemake/LinkPose_wWmkuMK0T.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661690185200",
        banner:
          "https://ik.imagekit.io/gillianassi/Projects/WindWakerRemake/LinkPose_wWmkuMK0T.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661690185200",

        title: "Windwaker Remake",
        markdown: WindwakerMd,
        tags: ["C++", DiVisualstudio],
        desc: "Graphics Programming, Overlord engine",
        featured: true,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Tumbnails/Tree-Umph_Tumbnail_B2Pwf5FwR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743301440",
        title: "Tree-Umph",
        markdown: TreeUphMd,
        tags: ["C#", DiUnitySmall, FaItchIo, IoMdCloudDownload],
        desc: "Game Jam, Group Project",
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
        featured: true,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Projects/NotForSale/NotForSaleBanner_3ooOZQyqk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657554358362",
        banner:
          "https://ik.imagekit.io/gillianassi/Projects/NotForSale/NotForSaleBanner_3ooOZQyqk.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657554358362",

        title: "Not For Sale",
        markdown: NotForSaleMd,
        tags: ["C#", DiUnitySmall, FaItchIo, IoMdCloudDownload],
        desc: "Complete Game creation, Group Project",
        featured: true,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Tumbnails/RayTracer_Tumbnail_5VHCJc57U.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743300788",
        title: "Multithreaded Ray Tracer",
        markdown: RayTracerMd,
        tags: ["C++", DiVisualstudio],
        desc: "Graphics Programming",
        featured: false,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Tumbnails/Rasterizer_Tumbnail_rHaD1v1HQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743300552",
        title: "Software/Hardware rasterizer",
        markdown: RasterizerMd,
        tags: ["C++", DiVisualstudio],
        desc: "Graphics Programming",
        featured: false,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Projects/DirectX12/dx12-ultimate-100835986-orig_qXPOJ9-Ul.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1659845185753",
        title: "Direct X 12 Introduction",
        markdown: DirectX12Md,
        tags: ["C++", DiVisualstudio],
        desc: "Graphics Programming, DXII",
        featured: false,
      },
    ],
  },
  {
    title: "Research",
    icon: IoIosPaper,
    projects: [
      {
        image:
          "https://ik.imagekit.io/gillianassi/Research/Regression/Linear-vs-Multiple-Regression-02-min_L9CJMuYX4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661776191112",
        title: "Regression",
        markdown: RegressionMd,
        tags: ["Matlab", DiGithubBadge],
        desc: "Data analysis, Regression",
        featured: false,
      },

      {
        image:
          "https://ik.imagekit.io/gillianassi/Research/PlenopticImaging/ActionShotPlenoptic2_rZPlYPhhv.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661777233389",
        banner:
          "https://ik.imagekit.io/gillianassi/Research/PlenopticImaging/ActionShotPlenoptic_lk4HpShtB.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661777233397",

        title: "VR for subjective evaluations of plenoptic images",
        markdown: PlenopticImagingMd,
        tags: ["C++", FaVrCardboard],
        desc: "VR, Bachelor Thesis",
        featured: true,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Research/HandTracking/HandTracking_aTsyPkxgc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=16598485591030",
        title: "Hand pose detection in VR",
        markdown: HandPoseDetectionMd,
        tags: [DiUnitySmall, FaVrCardboard],
        desc: "VR, Oculus SDK, Hand Tracking",
        featured: false,
      },
      {
        image:
          "https://ik.imagekit.io/gillianassi/Tumbnails/LockFreeLinkedList_Tumbnail_EVqB64eOC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1651743300169",
        title: "Lock Free Ordened Linked List",
        markdown: LockFreeMd,
        tags: ["C++", DiVisualstudio],
        desc: "Lock-free Multithreading",
        featured: false,
      },
    ],
  },
];
