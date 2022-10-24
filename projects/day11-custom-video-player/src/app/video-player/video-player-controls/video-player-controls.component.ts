import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-video-player-controls',
  template: `
    <div class="player__controls">
      <div class="progress">
        <div class="progress__filled"></div>
      </div>
      <button class="player__button toggle" title="Toggle Play">►</button>
      <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
      <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
      <button data-skip="-10" class="player__button">« 10s</button>
      <button data-skip="25" class="player__button">25s »</button>
    </div>
  `,
  styleUrls: ['./video-player-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoPlayerControlsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
