import {
  LightningBoltIcon,
  PuzzleIcon,
  CogIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Thread of Execution",
    icon: PuzzleIcon,
  },
  {
    name: "Execution Context",
    icon: () => <img src="/react.svg" height="24" width="24" />,
  },
  {
    name: "Global and local Memory",
    icon: CogIcon,
  },
  {
    name: "Event Loop",
    icon: LightningBoltIcon,
  },
  {
    name: "Callback Queue",
    icon: LightningBoltIcon,
  },
  {
    name: "Microtask Queue",
    icon: LightningBoltIcon,
  },
  {
    name: "Web API",
    icon: LightningBoltIcon,
  },
  {
    name: "Higher Order Functions",
    icon: PuzzleIcon,
  },
  {
    name: "Closure",
    icon: PuzzleIcon,
  },
  {
    name: "Recursion",
    icon: PuzzleIcon,
  },
  {
    name: "Prototype Chain",
    icon: PuzzleIcon,
  },
  {
    name: "Asyncronousity of Javascript - Promises",
    icon: LightningBoltIcon,
  },
];

function Features() {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 my-12">
        {features.map(({ icon: Icon, ...feature }, i) => (
          <div
            className="flex items-center space-x-4"
            key={feature.name.split(" ").join("-")}
          >
            <div>
              <Icon
                className="block w-8 h-8"
                style={{ height: 24, width: 24 }}
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="my-0 font-small dark:text-white">
                {feature.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;
