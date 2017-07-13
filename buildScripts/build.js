/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

/** Babbel and potencially other libraries
 * looks for this environment variable to determine
 * how they are built **/
process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment'));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }
  //Warnings and errors displyed to the console
  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }
  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings'));
    return jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }
  console.log(`Webpac stats: ${stats}`);

  console.log(chalk.green('Your app has been built for production and written to /dist !!!'));

  return 0;
});



