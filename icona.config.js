import { generate } from "@icona/generator";

generate({
  config: {
    svg: {
      genMode: "recreate",
      active: true, // you can disable svg generator if you set false
      path: "svg", // will generate svg files in svg folder
      svgoConfig: {
        plugins: [
          {
            name: "removeAttrs",
            params: {
              attrs: ["id"],
            },
            fn: () => {
              return {
                element: {
                  enter: (node) => {
                    // NOTE: Not working
                    // if (node.name === 'mask') return;

                    // NOTE: Working
                    if (node.name !== "mask") delete node.attributes.id;
                  },
                },
              };
            },
          },
          {
            name: "convertColors",
            params: { currentColor: true },
          },
        ],
      },
    },
  },
});
