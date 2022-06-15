/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/Main.ts":
/*!************************!*\
  !*** ./src/ts/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar GameController_1 = __webpack_require__(/*! ./controllers/GameController */ \"./src/ts/controllers/GameController.ts\");\n\nvar Main = function () {\n  function Main() {\n    this.gameController = new GameController_1.GameController();\n  }\n\n  return Main;\n}();\n\nnew Main();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBR0E7QUFHSTtBQUNJLFNBQUtBLGNBQUwsR0FBc0IsSUFBSUMsK0JBQUosRUFBdEI7QUFDSDs7QUFDTDtBQUFDLENBTkQ7O0FBUUEsSUFBSUMsSUFBSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvTWFpbi50cz80ODhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2FtZUNvbnRyb2xsZXJ9IGZyb20gXCIuL2NvbnRyb2xsZXJzL0dhbWVDb250cm9sbGVyXCI7XG5cblxuY2xhc3MgTWFpbiB7XG4gICAgcHJpdmF0ZSBnYW1lQ29udHJvbGxlcjogR2FtZUNvbnRyb2xsZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lQ29udHJvbGxlciA9IG5ldyBHYW1lQ29udHJvbGxlcigpXG4gICAgfVxufVxuXG5uZXcgTWFpbigpO1xuLy9jJ2VzdCB1biB0ZXh0ZSBqdXN0ZSBwb3VyIGRlcmFuZ2VyIHRow6lvIChpbCB2b3VsYWl0IHBsdXMgcXVlIGplIHRhcGUgZGFucyBjZSBmaWNoaWVyKSJdLCJuYW1lcyI6WyJnYW1lQ29udHJvbGxlciIsIkdhbWVDb250cm9sbGVyXzEiLCJNYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/Main.ts\n");

/***/ }),

/***/ "./src/ts/canvases/BallCanvas.ts":
/*!***************************************!*\
  !*** ./src/ts/canvases/BallCanvas.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.BallCanvas = void 0;\n\nvar Ball_1 = __webpack_require__(/*! ../components/Ball */ \"./src/ts/components/Ball.ts\");\n\nvar BallCanvas = function () {\n  function BallCanvas(canvasElement, ctx) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.ball = new Ball_1.Ball(this.canvasElement, this.ctx);\n    this.resizeCanvas();\n    this.addEventListeners();\n  }\n\n  BallCanvas.prototype.resizeCanvas = function () {\n    this.canvasElement.width = window.innerWidth;\n    this.canvasElement.height = window.innerHeight;\n    this.ball.draw();\n  };\n\n  BallCanvas.prototype.addEventListeners = function () {\n    var _this = this;\n\n    addEventListener('resize', function () {\n      _this.resizeCanvas();\n    });\n  };\n\n  return BallCanvas;\n}();\n\nexports.BallCanvas = BallCanvas;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvY2FudmFzZXMvQmFsbENhbnZhcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBTUksc0JBQVlBLGFBQVosRUFBOENDLEdBQTlDLEVBQTJFO0FBQ3ZFLFNBQUtELGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBRUEsU0FBS0MsSUFBTCxHQUFZLElBQUlDLFdBQUosQ0FBUyxLQUFLSCxhQUFkLEVBQTZCLEtBQUtDLEdBQWxDLENBQVo7QUFFQSxTQUFLRyxZQUFMO0FBQ0EsU0FBS0MsaUJBQUw7QUFFSDs7QUFFREM7QUFDSSxTQUFLTixhQUFMLENBQW1CTyxLQUFuQixHQUEyQkMsTUFBTSxDQUFDQyxVQUFsQztBQUNBLFNBQUtULGFBQUwsQ0FBbUJVLE1BQW5CLEdBQTRCRixNQUFNLENBQUNHLFdBQW5DO0FBQ0EsU0FBS1QsSUFBTCxDQUFVVSxJQUFWO0FBQ0gsR0FKRDs7QUFNQU47QUFBQTs7QUFDSU8sb0JBQWdCLENBQUMsUUFBRCxFQUFXO0FBQ3ZCQyxXQUFJLENBQUNWLFlBQUw7QUFDSCxLQUZlLENBQWhCO0FBSUgsR0FMRDs7QUFNSjtBQUFDLENBN0JEOztBQUFhVyxrQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS1wcm9qZXQtZXhhbWVuLy4vc3JjL3RzL2NhbnZhc2VzL0JhbGxDYW52YXMudHM/YjJjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JhbGx9IGZyb20gXCIuLi9jb21wb25lbnRzL0JhbGxcIjtcblxuZXhwb3J0IGNsYXNzIEJhbGxDYW52YXMge1xuICAgIHByaXZhdGUgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIGJhbGw6IEJhbGw7XG5cblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBjYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcblxuICAgICAgICB0aGlzLmJhbGwgPSBuZXcgQmFsbCh0aGlzLmNhbnZhc0VsZW1lbnQsIHRoaXMuY3R4KTtcblxuICAgICAgICB0aGlzLnJlc2l6ZUNhbnZhcygpXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgfVxuXG4gICAgcmVzaXplQ2FudmFzKCkge1xuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgdGhpcy5iYWxsLmRyYXcoKTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCk9PntcbiAgICAgICAgICAgIHRoaXMucmVzaXplQ2FudmFzKCk7XG4gICAgICAgIH0pXG5cbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiY3R4IiwiYmFsbCIsIkJhbGxfMSIsInJlc2l6ZUNhbnZhcyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiQmFsbENhbnZhcyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiZHJhdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpcyIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/canvases/BallCanvas.ts\n");

/***/ }),

/***/ "./src/ts/components/Ball.ts":
/*!***********************************!*\
  !*** ./src/ts/components/Ball.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Ball = void 0;\n\nvar settings_1 = __webpack_require__(/*! ../settings */ \"./src/ts/settings.ts\");\n\nvar Ball = function () {\n  function Ball(canvasElement, ctx) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.position = {\n      x: settings_1.settings.ball.initialPositionX,\n      y: settings_1.settings.ball.initialPositionY\n    };\n    this.draw();\n  }\n\n  Ball.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = 'red';\n    this.ctx.arc(this.position.x, this.position.y, settings_1.settings.ball.radius, 0, Math.PI * 2);\n    this.ctx.fill();\n    this.ctx.closePath();\n  };\n\n  return Ball;\n}();\n\nexports.Ball = Ball;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvY29tcG9uZW50cy9CYWxsLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFLSSxnQkFBWUEsYUFBWixFQUE4Q0MsR0FBOUMsRUFBMkU7QUFDdkUsU0FBS0QsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxRQUFMLEdBQWdCO0FBQ1pDLE9BQUMsRUFBRUMsb0JBQVNDLElBQVQsQ0FBY0MsZ0JBREw7QUFFWkMsT0FBQyxFQUFFSCxvQkFBU0MsSUFBVCxDQUFjRztBQUZMLEtBQWhCO0FBS0EsU0FBS0MsSUFBTDtBQUNIOztBQUVEQztBQUNJLFNBQUtULEdBQUwsQ0FBU1UsU0FBVDtBQUNBLFNBQUtWLEdBQUwsQ0FBU1csU0FBVCxHQUFxQixLQUFyQjtBQUNBLFNBQUtYLEdBQUwsQ0FBU1ksR0FBVCxDQUFhLEtBQUtYLFFBQUwsQ0FBY0MsQ0FBM0IsRUFBOEIsS0FBS0QsUUFBTCxDQUFjSyxDQUE1QyxFQUErQ0gsb0JBQVNDLElBQVQsQ0FBY1MsTUFBN0QsRUFBcUUsQ0FBckUsRUFBd0VDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQWxGO0FBQ0EsU0FBS2YsR0FBTCxDQUFTZ0IsSUFBVDtBQUNBLFNBQUtoQixHQUFMLENBQVNpQixTQUFUO0FBQ0gsR0FORDs7QUFPSjtBQUFDLENBdkJEOztBQUFhQyxZQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvY29tcG9uZW50cy9CYWxsLnRzPzMzOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4uL3NldHRpbmdzXCI7XG5cbmV4cG9ydCBjbGFzcyBCYWxsIHtcbiAgICBwcml2YXRlIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9O1xuXG4gICAgY29uc3RydWN0b3IoY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IGNhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgeDogc2V0dGluZ3MuYmFsbC5pbml0aWFsUG9zaXRpb25YLFxuICAgICAgICAgICAgeTogc2V0dGluZ3MuYmFsbC5pbml0aWFsUG9zaXRpb25ZXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JlZCc7XG4gICAgICAgIHRoaXMuY3R4LmFyYyh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgc2V0dGluZ3MuYmFsbC5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbImNhbnZhc0VsZW1lbnQiLCJjdHgiLCJwb3NpdGlvbiIsIngiLCJzZXR0aW5nc18xIiwiYmFsbCIsImluaXRpYWxQb3NpdGlvblgiLCJ5IiwiaW5pdGlhbFBvc2l0aW9uWSIsImRyYXciLCJCYWxsIiwiYmVnaW5QYXRoIiwiZmlsbFN0eWxlIiwiYXJjIiwicmFkaXVzIiwiTWF0aCIsIlBJIiwiZmlsbCIsImNsb3NlUGF0aCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/components/Ball.ts\n");

/***/ }),

/***/ "./src/ts/controllers/GameController.ts":
/*!**********************************************!*\
  !*** ./src/ts/controllers/GameController.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.GameController = void 0;\n\nvar BallCanvas_1 = __webpack_require__(/*! ../canvases/BallCanvas */ \"./src/ts/canvases/BallCanvas.ts\");\n\nvar GameController = function () {\n  function GameController() {\n    this.canvasElement = document.getElementById(\"ball-canvas\");\n    this.ctx = this.canvasElement.getContext(\"2d\");\n    this.ballCanvas = new BallCanvas_1.BallCanvas(this.canvasElement, this.ctx);\n  }\n\n  return GameController;\n}();\n\nexports.GameController = GameController;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvY29udHJvbGxlcnMvR2FtZUNvbnRyb2xsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFFQTtBQUtJO0FBQ0ksU0FBS0EsYUFBTCxHQUFxQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQXJCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtILGFBQUwsQ0FBbUJJLFVBQW5CLENBQThCLElBQTlCLENBQVg7QUFFQSxTQUFLQyxVQUFMLEdBQWtCLElBQUlDLHVCQUFKLENBQWUsS0FBS04sYUFBcEIsRUFBbUMsS0FBS0csR0FBeEMsQ0FBbEI7QUFDSDs7QUFFTDtBQUFDLENBWkQ7O0FBQWFJLHNCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXByb2pldC1leGFtZW4vLi9zcmMvdHMvY29udHJvbGxlcnMvR2FtZUNvbnRyb2xsZXIudHM/MmExOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JhbGxDYW52YXN9IGZyb20gXCIuLi9jYW52YXNlcy9CYWxsQ2FudmFzXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQ29udHJvbGxlciB7XG4gICAgcHJpdmF0ZSBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgYmFsbENhbnZhczogQmFsbENhbnZhcztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhbGwtY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIikgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuXG4gICAgICAgIHRoaXMuYmFsbENhbnZhcyA9IG5ldyBCYWxsQ2FudmFzKHRoaXMuY2FudmFzRWxlbWVudCwgdGhpcy5jdHgpO1xuICAgIH1cblxufSJdLCJuYW1lcyI6WyJjYW52YXNFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJiYWxsQ2FudmFzIiwiQmFsbENhbnZhc18xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/controllers/GameController.ts\n");

/***/ }),

/***/ "./src/ts/settings.ts":
/*!****************************!*\
  !*** ./src/ts/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  ball: {\n    initialPositionY: 200,\n    initialPositionX: 200,\n    radius: 220,\n    color: 'red'\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsTUFBSSxFQUFHO0FBQ0hDLG9CQUFnQixFQUFFLEdBRGY7QUFFSEMsb0JBQWdCLEVBQUcsR0FGaEI7QUFHSEMsVUFBTSxFQUFFLEdBSEw7QUFJSEMsU0FBSyxFQUFFO0FBSko7QUFEYSxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy90cy9zZXR0aW5ncy50cz83NGFhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBiYWxsIDoge1xuICAgICAgICBpbml0aWFsUG9zaXRpb25ZOiAyMDAsXG4gICAgICAgIGluaXRpYWxQb3NpdGlvblg6ICAyMDAsXG4gICAgICAgIHJhZGl1czogMjIwLFxuICAgICAgICBjb2xvcjogJ3JlZCcsXG4gICAgfVxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwiYmFsbCIsImluaXRpYWxQb3NpdGlvblkiLCJpbml0aWFsUG9zaXRpb25YIiwicmFkaXVzIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ts/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcHJvamV0LWV4YW1lbi8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktemplate_projet_examen"] = self["webpackChunktemplate_projet_examen"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/ts/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;