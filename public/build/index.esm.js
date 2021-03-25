import './index-6c533261.js';
import { A as ActiveRouter } from './active-router-8846f080.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
