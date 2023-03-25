const { handleError } = require('../utils/helpers/expressHelper');

async function getProjects(req, res) {
  const { db } = req.app;
  try {
    const data = await db.select().from('project AS p')
      .orderBy('p.id', 'desc');
    return res.json(data);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

async function getContributors(req, res) {
  const { id } = req.params;
  const { db } = req.app;
  try {
    console.log('=> id:', id);
    const contributors = await db.select().from('contributor AS c')
      .orderBy('c.id', 'desc');
    return res.json(contributors);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

module.exports = {
  getProjects,
  getContributors,
};
