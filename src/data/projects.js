export const projectGroups = [
  {
    id: "featured-work",
    eyebrow: "Featured work",
    title: "Professional gameplay work",
    description:
      "The strongest proof first: paid Unreal work, combat AI, cross-discipline collaboration, and production tools.",
    slugs: ["samsara"],
  },
  {
    id: "technical-projects",
    eyebrow: "Technical projects",
    title: "Gameplay systems and engine architecture",
    description:
      "C++, scalable systems, rendering decisions, and projects where I pushed below surface-level implementation.",
    slugs: ["custom-engine", "warpbound"],
  },
  {
    id: "applied-projects",
    eyebrow: "Applied projects",
    title: "Client and AR projects",
    description:
      "Projects where I had to translate real requirements into interactive, testable systems.",
    slugs: ["heart-garden", "ar-navigation-guide"],
  },
];

export const projects = [
  {
    slug: "samsara",
    title: "Samsara",
    subtitle: "Tiryag Charger enemy",
    category: "Featured work",
    role: "Freelance Gameplay Programmer",
    summary:
      "I built a tank-style enemy for Samsara, a souls-like action RPG inspired by Buddhist mythology, then was invited back for paid freelance work.",
    cardSummary:
      "Professional Unreal Engine work where I created a new enemy, collaborated with designers and artists, and returned as a paid freelance programmer.",
    cardMedia: {
      type: "video",
      src: "docs/assets/Samsara/Tiryag Fight Thumbnail.mp4",
      poster: "docs/assets/posters/samsara.jpg",
      label: "Samsara Tiryag Charger gameplay clip",
    },
    detailMedia: {
      type: "youtube",
      src: "https://www.youtube.com/embed/3X2yw45nOrg?si=BXS8GoWgj7rtKcN3",
      label: "Samsara Tiryag Charger demo fight",
    },
    links: [
      {
        label: "Steam page",
        href: "https://store.steampowered.com/app/1683570/Samsara/",
      },
    ],
    facts: [
      { label: "Team", value: "6 developers" },
      { label: "Project", value: "Active commercial game" },
      { label: "Outcome", value: "Invited back for paid freelance" },
    ],
    tools: [
      "Unreal Engine",
      "C++",
      "Blueprints",
      "Niagara",
      "Perforce",
      "Hansoft",
      "Miro",
      "Agile Scrum",
    ],
    contributions: [
      "Developed the Tiryag Charger enemy from a design brief into a playable combat feature.",
      "Built custom C++ components and improved AI, Blueprint, and Niagara implementation.",
      "Used playtest feedback to tune combat readability, pressure, and team synergy.",
      "Worked in a production-style pipeline with daily stand-ups, sprint reviews, and source control.",
      "Improved performance by roughly 15% while keeping the enemy readable in combat.",
    ],
    sections: [
      {
        title: "What I built",
        body: [
          "The Tiryag Charger is a tank enemy designed to take space, pull the player's attention, and create opportunities for other enemies to flank. I focused on making its behaviour readable enough for a souls-like encounter while still giving it enough pressure to matter in a group fight.",
          "This was my first proper experience working inside a larger Unreal production environment. I had to fit my work into existing code, animation, design expectations, and the team's sprint process.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "I kept the enemy behaviour modular so individual pieces could be tuned without rewriting the whole feature. The C++ and Blueprint split was chosen around iteration speed: heavier logic lived in C++, while designer-facing values stayed easy to adjust.",
          "I also reduced avoidable cost in the AI and visual effects path, which helped the enemy stay practical for combat scenes with multiple active actors.",
        ],
      },
      {
        title: "What I learned",
        body: [
          "The biggest growth point was confidence in showing work early. Getting feedback while the feature was still rough made the enemy better and helped me communicate more clearly with designers, artists, and producers.",
          "Being invited back for paid freelance work is the strongest signal from this project: the team trusted both the quality of the work and how I worked with them.",
        ],
      },
    ],
  },
  {
    slug: "custom-engine",
    title: "Custom C++ Component-Based Engine",
    subtitle: "raylib gameplay prototype",
    category: "Technical project",
    role: "C++ Engine Programmer",
    summary:
      "A work-in-progress C++ engine project built on raylib, focused on component architecture, rendering flow, material ownership, and swarm-style gameplay tests.",
    cardSummary:
      "A C++ engine prototype where I am testing component systems, rendering architecture, lighting, and high-count gameplay scenarios.",
    cardMedia: {
      type: "video",
      src: "docs/assets/Game_Engine_Hook.mp4",
      label: "Custom C++ engine gameplay hook",
    },
    detailMedia: {
      type: "youtube",
      src: "https://www.youtube.com/embed/xIFXy0o-wYs?si=cJac4_6EDIeOBlnV",
      label: "Custom C++ engine demo",
    },
    links: [],
    facts: [
      { label: "Status", value: "Work in progress" },
      { label: "Focus", value: "Engine architecture" },
      { label: "Prototype", value: "Swarm-style gameplay" },
    ],
    tools: ["C++", "raylib", "Shaders", "Component systems", "Rendering"],
    contributions: [
      "Designed a component-based entity model for gameplay objects.",
      "Built a central rendering path with material and shader ownership in mind.",
      "Used a small gameplay prototype to test systems against real behaviour instead of isolated demos.",
      "Planned performance-focused extensions including instancing, culling, and GPU compute experiments.",
    ],
    sections: [
      {
        title: "What I built",
        body: [
          "I started this project because I wanted to understand the systems that modern engines usually hide: component ownership, render flow, data movement, and how gameplay code talks to engine code.",
          "raylib handles the low-level windowing, input, and drawing layer, which lets me focus on the architecture decisions I care about most.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "The project is built as both an engine and a small gameplay prototype. That keeps the architecture honest: if a system only works in a clean test scene, it is not finished yet.",
          "The next technical direction is performance-focused: hardware instancing, frustum culling, deferred rendering, and eventually GPU compute for high-count enemy and projectile logic.",
        ],
      },
      {
        title: "What I learned",
        body: [
          "This project is making me more deliberate about where complexity belongs. It has also made me better at spotting the tradeoff between clean architecture and the iteration speed needed to make a game feel good.",
        ],
      },
    ],
  },
  {
    slug: "warpbound",
    title: "Warpbound",
    subtitle: "Solo SDL2 survival game",
    category: "Technical project",
    role: "Solo Game Designer and Developer",
    summary:
      "A solo SDL2 project where I focused on scalable game architecture, a spritesheet animator, a GUI shop system, and a clean HUD hierarchy.",
    cardSummary:
      "A solo C++ survival game where I pushed architecture: animator component, polymorphic shop items, and a maintainable HUD system.",
    cardMedia: {
      type: "video",
      src: "docs/assets/Warpbound Video.mp4",
      poster: "docs/assets/posters/warpbound.jpg",
      label: "Warpbound combat gameplay",
    },
    detailMedia: {
      type: "video",
      src: "docs/assets/WarpboundPage/WarpboundVideoNormal.mp4",
      poster: "docs/assets/posters/warpbound.jpg",
      label: "Warpbound gameplay demo",
    },
    links: [
      {
        label: "GitHub repository",
        href: "https://github.com/DuckMeMz/Warpbound",
      },
      {
        label: "Class diagram",
        href: "https://drive.google.com/file/d/1Wa8vY5ho-f2eOyLEkibAxh_GCkdgCWga/view?usp=sharing",
      },
    ],
    facts: [
      { label: "Team", value: "Solo" },
      { label: "Duration", value: "3 months" },
      { label: "Result", value: "85/100" },
    ],
    tools: ["C++", "SDL2", "Hornet Engine", "OOP", "UML"],
    contributions: [
      "Created a spritesheet animator component that avoids thousands of individual frame files.",
      "Built a GUI shop system using polymorphic shop items for easier extension.",
      "Designed a HUD hierarchy that separates display concerns from gameplay logic.",
      "Extended Hornet engine audio and graphics functionality where the project needed it.",
    ],
    sections: [
      {
        title: "What I built",
        body: [
          "Warpbound is a wave-based resource survival game built as a solo project. I used it to push my object-oriented design and to make systems that could grow without turning into one-off code.",
          "The feature I am proudest of is the spritesheet animator. Hornet's default animation path expected individual image files, but the planet assets were supplied as spritesheets. Loading thousands of separate files would have been awkward and wasteful, so I built a component that works directly from the sheet.",
        ],
        media: {
          type: "video",
          src: "docs/assets/WarpboundPage/Planet Video.mp4",
          poster: "docs/assets/posters/warpbound.jpg",
          label: "Warpbound planet spritesheet animation",
        },
      },
      {
        title: "Technical decisions",
        body: [
          "The animator feeds frames back into the existing object render path instead of replacing rendering outright. That kept rendering centralised and avoided making the animator a special case.",
          "For the HUD, I used a vertical hierarchy with high cohesion and low coupling. It receives, formats, and displays data, but does not own gameplay logic.",
        ],
        media: {
          type: "image",
          src: "docs/assets/WarpboundPage/HUD Class Diagram.png",
          label: "Warpbound HUD UML class diagram",
        },
      },
      {
        title: "What I learned",
        body: [
          "Working solo taught me how much architecture matters when there is no one else to catch messy decisions. It also confirmed that I prefer team development: different perspectives usually make the final game stronger, and I enjoy the communication side of building features together.",
        ],
      },
    ],
  },
  {
    slug: "heart-garden",
    title: "Heart Garden",
    subtitle: "Real-time biometric environment",
    category: "Applied project",
    role: "Technical and Environment Lead",
    summary:
      "A client-facing Unreal Engine environment that reacts to live heart coherence data, turning emotional state into water, foliage, lighting, and bell behaviour.",
    cardSummary:
      "A team Unreal project for a real client, using TCP heart data to drive a responsive therapeutic environment.",
    cardMedia: {
      type: "video",
      src: "docs/assets/HeartGardenPage/HeartGardenDemoVideos.mp4",
      poster: "docs/assets/posters/heart-garden.jpg",
      label: "Heart Garden environment demo",
    },
    detailMedia: {
      type: "video",
      src: "docs/assets/HeartGardenPage/HeartGardenDemoVideos.mp4",
      poster: "docs/assets/posters/heart-garden.jpg",
      label: "Heart Garden combined demo reel",
    },
    carousel: [
      {
        title: "Meadow",
        type: "youtube",
        src: "https://www.youtube.com/embed/QAuvAnSd4lE?si=22qwicf0KnZMj7mC",
        label: "Heart Garden meadow demo",
      },
      {
        title: "Water",
        type: "youtube",
        src: "https://www.youtube.com/embed/r2-3Hujk7bM?si=jrtzDA09oQGRICpl",
        label: "Heart Garden water demo",
      },
      {
        title: "Trees",
        type: "youtube",
        src: "https://www.youtube.com/embed/kHPetIQbUus?si=gTiIHv2HxrehGSRU",
        label: "Heart Garden trees demo",
      },
      {
        title: "Meadow variation",
        type: "youtube",
        src: "https://www.youtube.com/embed/UDvrkH0EubA?si=HMsTXYE8RI2gJ0Ll",
        label: "Heart Garden meadow variation demo",
      },
      {
        title: "Bell",
        type: "youtube",
        src: "https://www.youtube.com/embed/3eUL1c3_2fw?si=nDqg1oJ-xKoNfQzO",
        label: "Heart Garden bell demo",
      },
    ],
    links: [
      {
        label: "Original research paper",
        href: "https://doi.org/10.1080/10447318.2025.2504201",
      },
    ],
    facts: [
      { label: "Team", value: "7 students" },
      { label: "Duration", value: "3 months" },
      { label: "Result", value: "88/100" },
    ],
    tools: [
      "Unreal Engine 5",
      "Blueprints",
      "TCP",
      "Dynamic materials",
      "Client communication",
    ],
    contributions: [
      "Led technical environment work and client communication.",
      "Used TCP data from emWave Pro to drive real-time environment changes.",
      "Built reactive water, foliage, sky, and bell systems around coherence values.",
      "Translated loose client ideas into a polished proof of concept.",
    ],
    sections: [
      {
        title: "What I built",
        body: [
          "Heart Garden receives real-time coherence data from emWave Pro and uses it to change the environment. A value closer to calm makes the world clearer and brighter; a stressed value pushes the environment into darker, more agitated states.",
          "My role covered both technical implementation and client communication. I worked closely with the client to turn broad ideas into features we could build, test, and refine.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "For the water, I used dynamic material instances controlled by coherence values. The material changes opacity, normal intensity, distortion, and panning speed to move smoothly between calm and stressed states.",
          "For the bell, I replaced my earlier animation timeline approach with a sine-wave driven system. That made the swing easier to tune and gave better control over amplitude as the coherence value changed.",
        ],
        media: {
          type: "image",
          src: "docs/assets/HeartGardenPage/Bell Swing Logic.png",
          label: "Heart Garden bell swing Blueprint logic",
        },
      },
      {
        title: "What I learned",
        body: [
          "This project made me better at turning client language into technical behaviour. It also helped me communicate technical tradeoffs clearly, because the client cared about the emotional result more than the implementation details.",
        ],
      },
    ],
  },
  {
    slug: "ar-navigation-guide",
    title: "AR Navigation Guide",
    subtitle: "Mobile campus navigation",
    category: "Applied project",
    role: "AR Application Developer",
    summary:
      "A mobile AR navigation app that uses a measured 3D environment, Unity NavMesh, and QR recentering to keep guidance aligned with the real building.",
    cardSummary:
      "A Unity AR project where I owned the app implementation, to-scale building model, NavMesh navigation, and QR recentering.",
    cardMedia: {
      type: "video",
      src: "docs/assets/ARNavigationPage/Ar Navigation Demo.mp4",
      label: "AR Navigation Guide mobile demo",
    },
    detailMedia: {
      type: "youtube",
      src: "https://www.youtube.com/embed/WZ6WqVDH8V8?si=fs14G9H3jmrUMoRs",
      label: "AR Navigation Guide demo video",
    },
    links: [],
    facts: [
      { label: "Team", value: "6 students" },
      { label: "Duration", value: "3 months" },
      { label: "Result", value: "84/100" },
    ],
    tools: ["Unity", "C#", "Mobile AR", "NavMesh", "ZXing.Net", "QR codes"],
    contributions: [
      "Owned the AR application implementation while teammates focused on supporting deliverables.",
      "Built a to-scale 3D campus environment from blueprints and in-person measurements.",
      "Implemented QR code recentering with ZXing.Net to recover from tracking drift.",
      "Connected real-world layout data to Unity navigation so the route line could update while the user moved.",
    ],
    sections: [
      {
        title: "What I built",
        body: [
          "The app helps students and visitors navigate unfamiliar university buildings through mobile augmented reality. My main responsibility was creating the actual AR application and the environment it navigated through.",
          "I rebuilt the target building in Unity using blueprints plus in-person measurements for doors, corridors, and key spaces. That gave the NavMesh a usable, real-world scale foundation.",
        ],
      },
      {
        title: "Technical decisions",
        body: [
          "The hardest problem was keeping the phone aligned with the real building. Older devices and dim lighting caused tracking drift, so I tested recovery options and chose QR codes because they were cheap, clear for users, and easy to place around the building.",
          "When a QR code is scanned, the app recenters the navigation position and orientation so the route can recover without restarting the experience.",
        ],
      },
      {
        title: "What I learned",
        body: [
          "This project taught me a lot about the practical side of AR: the technical feature is only useful if it survives imperfect lighting, imperfect devices, and real users moving through a space.",
        ],
      },
    ],
  },
];

export function findProject(slug) {
  return projects.find((project) => project.slug === slug);
}

export function projectsForGroup(group) {
  return group.slugs
    .map((slug) => findProject(slug))
    .filter((project) => project);
}
