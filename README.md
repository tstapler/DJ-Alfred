# DJ-Alfred

A tool to help mobile DJs take their services to the next level.

## Development

@tstapler does most development on \*nix (Ubuntu/Debian/Arch/Osx) it's unclear if these work for Windows.

**System Dependencies**:
 - `docker`
 - `npm/node`
 - `maven3/jdk1.8`
First, install dependencies

```shell
$ make init
```

Then, build the container

```shell
$ make build
```

Finally, run the container

```shell
$ make run
```

You should find the latest version of the application if you navigate to http://localhost:8001

Happy Hacking!


### Front End

To serve the frontend using the autoreloading development server built into the `angular-cli`

```shell
$ make run-frontend
```

For more specific instructions developing the frontend see its [readme](frontend/README.md).

### Back End
To run the backend using the Django development server

```shell
$ make run-backend
```

For more specific instructions developing the backend see its [readme](backend/README.md).
