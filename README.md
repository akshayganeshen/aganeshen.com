# `aganeshen.com`

Next.js webapp powering [aganeshen.com](https://www.aganeshen.com).

## Developing

This repository uses Yarn as the package manager.

The package scripts include the default Next.js scripts to run the application
in development (`yarn dev`), as well as producing and running a production
build (`yarn build` and `yarn start`).

```sh
yarn install
yarn dev
# $ next dev
# ready - started server on 0.0.0.0:3000, url: http://localhost:3000
# ...
```

When updating the repository `dependencies`, ensure the packages are specified
with fixed versions (e.g. `"some-package@1.0.0"`). When updating
`devDependencies` with type definitions, ensure these packages use fixed
versions as well. For all other `devDependencies` (scripts, utilities, etc.),
use a version range that is appropriate for the package
(e.g. `"some-package@^1.0.0"`).

All sources should be contained in the `src/` directory. For new pages, add a
new page in `src/pages`. For new components, add the new component to its own
directory within `src/components`. When making modifications to any of these
files, re-run `yarn prettier` to ensure the formatting is consistent.

All commits should use conventional commits. This allows the release tooling
(`standard-version`) to pick up the changes and determine the appropriate
version bump for it.

## Releases

Releases should be cut on the `main` branch when deploying new versions. To
create a new release, simply run `yarn release`. This will generate the
changelog for the release and tag the release version. Ensure that this
commit and tag is pushed back to the repository.

```sh
yarn release
git push --follow-tags origin main
```

## Deploying

Deployments are performed automatically on Netlify whenever there are changes
to the `main` branch.

All changes to the `main` branch should end with a release commit. This allows
Netlify to report the application version for each deployment.
