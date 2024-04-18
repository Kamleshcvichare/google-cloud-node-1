// Copyright 2024 Google LLC
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



'use strict';

function main(name, operationId) {
  // [START aiplatform_v1beta1_generated_ExtensionExecutionService_ExecuteExtension_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name (identifier) of the extension;
   *  Format:
   *  `projects/{project}/locations/{location}/extensions/{extension}`
   */
  // const name = 'abc123'
  /**
   *  Required. The desired ID of the operation to be executed in this extension
   *   as defined in
   *   ExtensionOperation.operation_id google.cloud.aiplatform.v1beta1.ExtensionOperation.operation_id.
   */
  // const operationId = 'abc123'
  /**
   *  Optional. Request parameters that will be used for executing this
   *  operation.
   *  The struct should be in a form of map with param name as the key and actual
   *  param value as the value.
   *  E.g. If this operation requires a param "name" to be set to "abc". you can
   *  set this to something like {"name": "abc"}.
   */
  // const operationParams = {}
  /**
   *  Optional. Auth config provided at runtime to override the default value in
   *  Extension.manifest.auth_config .
   *  The AuthConfig.auth_type should match the value in
   *  Extension.manifest.auth_config .
   */
  // const runtimeAuthConfig = {}

  // Imports the Aiplatform library
  const {ExtensionExecutionServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new ExtensionExecutionServiceClient();

  async function callExecuteExtension() {
    // Construct request
    const request = {
      name,
      operationId,
    };

    // Run request
    const response = await aiplatformClient.executeExtension(request);
    console.log(response);
  }

  callExecuteExtension();
  // [END aiplatform_v1beta1_generated_ExtensionExecutionService_ExecuteExtension_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));