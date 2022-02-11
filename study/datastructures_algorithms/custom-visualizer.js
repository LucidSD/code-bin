/* eslint-disable no-console */
// @ts-check
/**
 * @type {import("@hediet/debug-visualizer-data-extraction").LoadDataExtractorsFn}
 */
module.exports = (register, helpers) => {
  register({
    id: 'map',
    getExtractions(data, collector) {
      if (!(data instanceof Map)) {
        return;
      }

      collector.addExtraction({
        priority: 1000,
        id: 'map',
        name: 'Map',
        extractData() {
          return helpers.asData({
            kind: {
              table: true,
            },
            rows: [...data].map(([k, v]) => ({
              key: k,
              value: v,
            })),
          });
        },
      });
    },
  });

  register({
    id: 'LinkedList',
    getExtractions(data, collector) {
      // if (data.constructor.name !== 'LinkedList'
      // 	&& data.constructor.name !== 'DoublyLinkedList') {
      //   return;
      // }
      console.log(data);
      console.log(helpers.tryEval([

        'data.constructor.name',
      ]));
      collector.addExtraction({
        priority: 1000,
        id: 'LinkedList',
        name: 'LinkedList',
        extractData() {
          return helpers.createGraphFromPointers(
            {
            // @ts-ignore
              'list.head': data.head,
              // @ts-ignore
              'list.tail': data.tail,

            },
            (i) => ({
              id: i.id,
              label: i.val || 'test',
              color: 'lightblue',
              edges: [{
                to: i.next,
                label: 'next',
                color: 'lightblue',
              },
              {
                to: i.prev,
                label: 'prev',
                color: 'lightblue',
              },
              {
                to: i.child,
                label: 'child',
                color: 'lightblue',
              }
              ].filter((r) => !!r.to),
            }),
          );
        },
      });
    },
  });

  register({
    id: 'positionOrRangeInTextModel',
    getExtractions(data, collector, context) {
      collector.addExtraction({
        priority: 100,
        id: 'foo',
        name: 'Foo',
        extractData() {
          return helpers.asData({
            kind: {
              text: true,
            },
            text: Object.keys(context.variablesInScope).join(', '),
          });
        },
      });
    },
  });
};
