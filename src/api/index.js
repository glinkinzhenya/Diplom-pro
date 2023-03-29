import axios from './service';

const classes = {
  fetch: () => axios.get('/classes').then((data) => data),
};

const trainers = {
  fetch: () => axios.get('/trainers').then((data) => data),
};

export { classes, trainers };
