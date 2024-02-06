import { Hero } from "../components/layouts/hero";
import { Slider } from "../components/shared/carousel";
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
          <RichText key={index} data={{ ...section }} />
        </div>
      );
    case "shared.quote":
      return (
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <Quote key={index} data={{ ...section }} />
        </div>
      );
    case "shared.media":
      return <Media key={index} data={{ ...section }} />;
    case "shared.slider":
      return (
        <section className="my-10">
          <Slider key={index} data={section.files.data} />
        </section>
      );
    default:
      return <></>;
  }
};
