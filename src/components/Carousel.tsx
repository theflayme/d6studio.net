import HTML from '../assets/icon/html.svg?react'
import CSS from '../assets/icon/css.svg?react'
import SCSS from '../assets/icon/scss.svg?react'
import Rest from '../assets/icon/rest-api.svg?react'
import Kubernetes from '../assets/icon/kubernetes.svg?react'
import JS from '../assets/icon/js.svg?react'
import ReactIcon from '../assets/icon/science.svg?react'
import TypeScriptIcon from '../assets/icon/typescript.svg?react'
import TailWindIcon from '../assets/icon/tailwind.svg?react'
import MongoDBIcon from '../assets/icon/mongodb.svg?react'
import { useMemo, type ComponentType, type FC, type SVGProps } from 'react'

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

interface Props {
  stack?: IconType[];
}


const techStack: IconType[] = [
  HTML,
  CSS,
  SCSS,
  JS,
  TypeScriptIcon,
  ReactIcon,
  TailWindIcon,
  MongoDBIcon,
  Rest,
  Kubernetes,
];

const Carousel: FC<Props> = ({ stack = techStack }) => {
  const renderedStack = useMemo(
    () =>
      stack.map((Icon) => (
        <Icon
          key={Icon.displayName || Icon.name}
          className="group__carusel__item"
        />
      )),
    [stack]
  );

  return (
    <div className="content__card__carusel">
      <div className="group__carusel">{renderedStack}</div>
      <div aria-hidden className="group__carusel">
        {renderedStack}
      </div>
    </div>
  );
};


export default Carousel;
