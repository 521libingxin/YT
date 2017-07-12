
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TjjmRoutingModule } from './tjjm-routing.module';
import { TjjmComponent } from './tjjm.component';

import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';
@NgModule({
  imports: [
    CommonModule, TjjmRoutingModule
  ],
  providers: [AdService],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  declarations: [TjjmComponent,
                  AdBannerComponent,
                  AdDirective
  ]
})
export class TjjmModule { }