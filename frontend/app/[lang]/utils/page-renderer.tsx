import { Hero } from "../components/layouts/Hero";

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
    default:
      return <></>;
  }
};
