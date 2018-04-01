import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class DocumentRef {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  public getNativeDocument(): Document {
    if (isPlatformBrowser(this.platformId)) {
      return document;
    }
    return {} as Document;
  }
}
