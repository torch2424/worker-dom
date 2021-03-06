/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

declare interface Sanitizer {
  sanitize(node: Node): boolean;
  mutateAttribute(node: Node, attr: string, value: string | null): boolean;
  mutateProperty(node: Node, prop: string, value: string): boolean;
}

// OffscreenCanvas not yet available in TypeScript - 'transferControlToOffscreen' would not be
// detected as a Canvas method unless this is here
declare interface HTMLCanvasElement {
  transferControlToOffscreen(): Transferable;
}

interface Node {
  _index_: number;
}

type RenderableElement = (HTMLElement | SVGElement | Text | Comment) & { [index: string]: any };

declare const DEBUG_ENABLED: boolean;
