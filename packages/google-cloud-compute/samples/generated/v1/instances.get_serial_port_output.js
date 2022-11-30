// Copyright 2022 Google LLC
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

function main(instance, project, zone) {
  // [START compute_v1_generated_Instances_GetSerialPortOutput_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Name of the instance for this request.
   */
  // const instance = 'abc123'
  /**
   *  Specifies which COM or serial port to retrieve data from.
   */
  // const port = 1234
  /**
   *  Project ID for this request.
   */
  // const project = 'my-project'
  /**
   *  Specifies the starting byte position of the output to return. To start with the first byte of output to the specified port, omit this field or set it to `0`. If the output for that byte position is available, this field matches the `start` parameter sent with the request. If the amount of serial console output exceeds the size of the buffer (1 MB), the oldest output is discarded and is no longer available. If the requested start position refers to discarded output, the start position is adjusted to the oldest output still available, and the adjusted start position is returned as the `start` property value. You can also provide a negative start position, which translates to the most recent number of bytes written to the serial port. For example, -3 is interpreted as the most recent 3 bytes written to the serial console.
   */
  // const start = 1234
  /**
   *  The name of the zone for this request.
   */
  // const zone = 'abc123'

  // Imports the Compute library
  const {InstancesClient} = require('@google-cloud/compute').v1;

  // Instantiates a client
  const computeClient = new InstancesClient();

  async function callGetSerialPortOutput() {
    // Construct request
    const request = {
      instance,
      project,
      zone,
    };

    // Run request
    const response = await computeClient.getSerialPortOutput(request);
    console.log(response);
  }

  callGetSerialPortOutput();
  // [END compute_v1_generated_Instances_GetSerialPortOutput_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));