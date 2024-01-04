// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

/* global window */
import type * as gax from 'google-gax';
import type {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  LROperation,
} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1/snapshot_settings_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './snapshot_settings_service_client_config.json';
const version = require('../../../package.json').version;

/**
 *  The SnapshotSettings API.
 * @class
 * @memberof v1
 */
export class SnapshotSettingsServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  snapshotSettingsServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of SnapshotSettingsServiceClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean} [options.fallback] - Use HTTP/1.1 REST mode.
   *     For more information, please check the
   *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
   * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
   *     need to avoid loading the default gRPC version and want to use the fallback
   *     HTTP implementation. Load only fallback version and pass it to the constructor:
   *     ```
   *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
   *     const client = new SnapshotSettingsServiceClient({fallback: true}, gax);
   *     ```
   */
  constructor(
    opts?: ClientOptions,
    gaxInstance?: typeof gax | typeof gax.fallback
  ) {
    // Ensure that options include all the required fields.
    const staticMembers = this
      .constructor as typeof SnapshotSettingsServiceClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(
      opts?.servicePath || opts?.apiEndpoint
    );
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    // Implicitly enable HTTP transport for the APIs that use REST as transport (e.g. Google Cloud Compute).
    if (!opts) {
      opts = {fallback: true};
    } else {
      opts.fallback = opts.fallback ?? true;
    }
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Load google-gax module synchronously if needed
    if (!gaxInstance) {
      gaxInstance = require('google-gax') as typeof gax;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gaxInstance.fallback : gaxInstance;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.compute.v1.SnapshotSettingsService',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = this._gaxModule.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.snapshotSettingsServiceStub) {
      return this.snapshotSettingsServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.compute.v1.SnapshotSettingsService.
    this.snapshotSettingsServiceStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.compute.v1.SnapshotSettingsService'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.compute.v1.SnapshotSettingsService,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const snapshotSettingsServiceStubMethods = ['get', 'patch'];
    for (const methodName of snapshotSettingsServiceStubMethods) {
      const callPromise = this.snapshotSettingsServiceStub.then(
        stub =>
          (...args: Array<{}>) => {
            if (this._terminated) {
              return Promise.reject('The client has already been closed.');
            }
            const func = stub[methodName];
            return func.apply(stub, args);
          },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.snapshotSettingsServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'compute.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'compute.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/compute',
      'https://www.googleapis.com/auth/cloud-platform',
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  /**
   * Get snapshot settings.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.project
   *   Project ID for this request.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing {@link protos.google.cloud.compute.v1.SnapshotSettings|SnapshotSettings}.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1/snapshot_settings_service.get.js</caption>
   * region_tag:compute_v1_generated_SnapshotSettingsService_Get_async
   */
  get(
    request?: protos.google.cloud.compute.v1.IGetSnapshotSettingRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.compute.v1.ISnapshotSettings,
      protos.google.cloud.compute.v1.IGetSnapshotSettingRequest | undefined,
      {} | undefined,
    ]
  >;
  get(
    request: protos.google.cloud.compute.v1.IGetSnapshotSettingRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.compute.v1.ISnapshotSettings,
      | protos.google.cloud.compute.v1.IGetSnapshotSettingRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  get(
    request: protos.google.cloud.compute.v1.IGetSnapshotSettingRequest,
    callback: Callback<
      protos.google.cloud.compute.v1.ISnapshotSettings,
      | protos.google.cloud.compute.v1.IGetSnapshotSettingRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  get(
    request?: protos.google.cloud.compute.v1.IGetSnapshotSettingRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.compute.v1.ISnapshotSettings,
          | protos.google.cloud.compute.v1.IGetSnapshotSettingRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.compute.v1.ISnapshotSettings,
      | protos.google.cloud.compute.v1.IGetSnapshotSettingRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.compute.v1.ISnapshotSettings,
      protos.google.cloud.compute.v1.IGetSnapshotSettingRequest | undefined,
      {} | undefined,
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        project: request.project ?? '',
      });
    this.initialize();
    return this.innerApiCalls.get(request, options, callback);
  }
  /**
   * Patch snapshot settings.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.project
   *   Project ID for this request.
   * @param {string} request.requestId
   *   An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported ( 00000000-0000-0000-0000-000000000000).
   * @param {google.cloud.compute.v1.SnapshotSettings} request.snapshotSettingsResource
   *   The body resource for this request
   * @param {string} request.updateMask
   *   update_mask indicates fields to be updated as part of this request.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing
   *   a long running operation.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations | documentation }
   *   for more details and examples.
   *   This method is considered to be in beta. This means while
   *   stable it is still a work-in-progress and under active development,
   *   and might get backwards-incompatible changes at any time.
   *   `.promise()` is not supported yet.
   * @example <caption>include:samples/generated/v1/snapshot_settings_service.patch.js</caption>
   * region_tag:compute_v1_generated_SnapshotSettingsService_Patch_async
   */
  patch(
    request?: protos.google.cloud.compute.v1.IPatchSnapshotSettingRequest,
    options?: CallOptions
  ): Promise<
    [
      LROperation<protos.google.cloud.compute.v1.IOperation, null>,
      protos.google.cloud.compute.v1.IOperation | undefined,
      {} | undefined,
    ]
  >;
  patch(
    request: protos.google.cloud.compute.v1.IPatchSnapshotSettingRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.compute.v1.IOperation,
      | protos.google.cloud.compute.v1.IPatchSnapshotSettingRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  patch(
    request: protos.google.cloud.compute.v1.IPatchSnapshotSettingRequest,
    callback: Callback<
      protos.google.cloud.compute.v1.IOperation,
      | protos.google.cloud.compute.v1.IPatchSnapshotSettingRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  patch(
    request?: protos.google.cloud.compute.v1.IPatchSnapshotSettingRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.compute.v1.IOperation,
          | protos.google.cloud.compute.v1.IPatchSnapshotSettingRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.compute.v1.IOperation,
      | protos.google.cloud.compute.v1.IPatchSnapshotSettingRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      LROperation<protos.google.cloud.compute.v1.IOperation, null>,
      protos.google.cloud.compute.v1.IOperation | undefined,
      {} | undefined,
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        project: request.project ?? '',
      });
    this.initialize();
    return this.innerApiCalls
      .patch(request, options, callback)
      .then(
        ([response, operation, rawResponse]: [
          protos.google.cloud.compute.v1.IOperation,
          protos.google.cloud.compute.v1.IOperation,
          protos.google.cloud.compute.v1.IOperation,
        ]) => {
          return [
            {
              latestResponse: response,
              done: false,
              name: response.id,
              metadata: null,
              result: {},
            },
            operation,
            rawResponse,
          ];
        }
      );
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.snapshotSettingsServiceStub && !this._terminated) {
      return this.snapshotSettingsServiceStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}