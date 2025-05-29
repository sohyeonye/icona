import { generate } from "@icona/generator";

generate({
  config: {
    svg: {
      active: true, // you can disable svg generator if you set false
      path: "svg", // will generate svg files in svg folder
      svgoConfig: {},
    },
  },
});