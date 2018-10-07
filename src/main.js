import { getElementFromTemplate } from '@/app/helper';
import { header, body } from '@/app/components';
import store from '@/app/store';

import '@/assets/sass/style.css'

const app = document.querySelector('#app');
app.appendChild(getElementFromTemplate(header(store)))
app.appendChild(getElementFromTemplate(body(store)))