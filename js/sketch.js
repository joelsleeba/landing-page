/**
 * noise values (noise 2d) are used to animate a bunch of agents.
 *
 * KEYS
 * space               : new noise seed
 * backspace           : clear screen
 * s                   : save png
 */

'use strict';

var sketch = function(p) {
  var agents = [];
  var agentCount = 1000;
  var noiseScale = 2000;
  var noiseStrength = 10;
  var overlayAlpha = 10;
  var agentAlpha = 80;
  var strokeWidth = 0.3;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);

    for (var i = 0; i < agentCount; i++) {
      agents[i] = new Agent();
    }
  };

  p.draw = function() {
    p.fill(255, overlayAlpha);
    p.noStroke();
    p.rect(0, 0, p.width, p.height);

    // Draw agents
    p.stroke(0, agentAlpha);
    for (var i = 0; i < agentCount; i++) {
      agents[i].update1(noiseScale, noiseStrength, strokeWidth);
    }
  };

  p.keyReleased = function() {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
    if (p.key == ' ') {
      var newNoiseSeed = p.floor(p.random(10000));
      p.noiseSeed(newNoiseSeed);
    }
    if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(255);
  };
};

var myp5 = new p5(sketch);
