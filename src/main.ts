import { bootstrapApplication } from '@angular/platform-browser';
import { 
  RouteReuseStrategy, 
  provideRouter, 
  withPreloading, 
  PreloadAllModules 
} from '@angular/router';
import { 
  IonicRouteStrategy, 
  provideIonicAngular 
} from '@ionic/angular/standalone';

import { provideHttpClient } from '@angular/common/http'; // 新增
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// 必须添加的图标导入
import { addIcons } from 'ionicons';
import { add, helpCircle, trash, search } from 'ionicons/icons';

// 注册图标
addIcons({ add, 'help-circle': helpCircle, trash, search });

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular({}),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  provideHttpClient(), // 新增
  ],
});