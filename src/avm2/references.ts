/*
 * Copyright 2013 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


///<reference path='utilities.ts' />
///<reference path='metrics.ts' />
///<reference path='parser.ts' />
///<reference path='runtime.ts' />
///<reference path='domain.ts' />
///<reference path='scope.ts' />
///<reference path='class.ts' />
///<reference path='bindings.ts' />
///<reference path='trampoline.ts' />

declare function log(s: any);
declare function print(s: string);
declare function assert(condition: any, ...args);
declare function warning(message: string);
declare function unexpected(message?: any);