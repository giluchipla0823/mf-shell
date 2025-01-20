import { loadManifest } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

console.log(environment);

// loadManifest('/assets/mf.manifest-dev.json', true)
loadManifest(environment.mfManifest, true)
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
