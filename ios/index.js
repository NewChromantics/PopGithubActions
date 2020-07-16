const core = require('@actions/core');
const exec = require("@actions/exec");

try {
  process.env.BuildProject = core.getInput("BuildProject");
  process.env.BuildScheme = core.getInput("BuildScheme");

  process.env.buildTarget = buildTarget.toLowerCase();

  switch(buildTarget) {
    case("ios"):
      await exec.exec(`/bin/bash ${__dirname}/ios.sh`);
      break;
    case("osx"):
      await exec.exec(`/bin/bash ${__dirname}/osx.sh`);
      break;
    case("windows"):
      await exec.exec(`/bin/bash ${__dirname}/windows.sh`);
      break;
    // These 2 will combine when we dont need a separate process for Nvidia
    case("arm64"):
      await exec.exec(`/bin/bash ${__dirname}/arm64.sh`);
      break;
    case("x86_64"):
      await exec.exec(`/bin/bash ${__dirname}/x86_64.sh`);
      break; 
    default:
      throw "buildTarget is not recognised!"
  }
  

} catch (error) {
  core.setFailed(error.message);
}
