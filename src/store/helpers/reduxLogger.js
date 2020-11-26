// Console logger for Redux Action dispatch fires
import { createLogger } from 'redux-logger';

const logger = createLogger({
  collapsed: true,
  timestamp: false,
  diff: true
});

export default logger;
