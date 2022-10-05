export default {
  title: 'rotor schema',
  version: 0,
  primaryKey: 'id',
  type: 'object',
  properties: {
    id: {
      type: 'string',
    },
    seed: {
      type: 'string'
    },
    targetCrosswireCount: {
      type: 'number',
      default: 26
    },
    machine: {
      ref: 'machine',
      type: 'string'
    },
    crosswires: {
      type: 'array',
      ref: 'crosswire',
      items: {
        type: 'string'
      }
    },
  },
  required: ['id', 'seed', 'targetCrosswireCount', 'machine'],
  indexes: [
    ['seed', 'machine']
  ]
}