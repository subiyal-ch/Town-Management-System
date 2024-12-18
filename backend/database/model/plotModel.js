const { models } = require("../index");

module.exports = {
  createPlot: async (body) => {
    try {
      const data = await models.plots.create({ ...body });
      return {
        data: data,
      };
    } catch (error) {
      return {
        // error: error.errors[0].message,
        error: error.message,
      };
    }
  },

  getAllPlots: async (query) => {
    try {
      const data = await models.plots.findAndCountAll({
        // attributes: {
        //   exclude: ["password", "deletedAt"],
        // },
        paranoid: false,
      });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },

  updatePlot: async ({ PlotId, ...body }) => {
    try {
      const data = await models.plots.update(
        { ...body },
        { where: { PlotId: PlotId } }
      );

      return {
        data: data,
      };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },

  removePlot: async ({ PlotId }) => {
    try {
      const data = await models.plots.destroy({ where: { PlotId: PlotId } });
      return {
        data: data,
      };
    } catch (error) {
      return { error: error.errors[0].message };
    }
  },
};
