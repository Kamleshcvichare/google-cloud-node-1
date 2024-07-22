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

function main(name) {
  // [START gdchardwaremanagement_v1alpha_generated_GDCHardwareManagement_DeleteOrder_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the order.
   *  Format: `projects/{project}/locations/{location}/orders/{order}`
   */
  // const name = 'abc123'
  /**
   *  Optional. An optional unique identifier for this request. See
   *  AIP-155 (https://google.aip.dev/155).
   */
  // const requestId = 'abc123'
  /**
   *  Optional. An option to delete any nested resources in the Order, such as a
   *  HardwareGroup. If true, any nested resources for this Order will also be
   *  deleted. Otherwise, the request will only succeed if the Order has no
   *  nested resources.
   */
  // const force = true

  // Imports the Gdchardwaremanagement library
  const {GDCHardwareManagementClient} = require('@google-cloud/gdchardwaremanagement').v1alpha;

  // Instantiates a client
  const gdchardwaremanagementClient = new GDCHardwareManagementClient();

  async function callDeleteOrder() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await gdchardwaremanagementClient.deleteOrder(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callDeleteOrder();
  // [END gdchardwaremanagement_v1alpha_generated_GDCHardwareManagement_DeleteOrder_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));