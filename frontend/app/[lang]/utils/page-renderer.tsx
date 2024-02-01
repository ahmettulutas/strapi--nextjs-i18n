import { Hero } from "../components/layouts/hero";
import Media from "../components/shared/media";
import { Quote } from "../components/shared/quote-renderer";
import RichText from "../components/shared/rich-text-renderer";

export const pageRenderer = (section: any, index: number) => {
  switch (section.__component) {
    case "layouts.hero":
      return (
        <Hero
          buttonLink={{ ...section.buttonLink }}
          key={index}
          title={section.title}
          description={section.description}
        />
      );
    case "shared.rich-text":
      return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <RichText key={index} data={section} />
        </div>
      );
    case "shared.quote":
      return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <Quote data={{ ...section }} />
        </div>
      );
    case "shared.media":
      return <Media data={{ ...section }} />;
    default:
      return <></>;
  }
};
