import { Component } from '@angular/core';

type featureType = 'recipe' | 'shopping-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature: featureType = 'recipe';
  title = 'course-project';

  onNavigate(feature: featureType) {
    this.loadedFeature = feature;
  }
}
