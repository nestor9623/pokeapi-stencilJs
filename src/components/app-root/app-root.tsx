import { Component, h } from '@stencil/core';
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {

  render() {
    return (
      <div>
        {/* <stencil-route-link url='/' class="header-principal">
          <h1 class="header-principal">Prueba Front-Pokemon</h1>
        </stencil-route-link> */}
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/pokemon/:language' component='pokemon-list' />
              <stencil-route url='/battle' component='pokemon-battle' />
              {/* <stencil-route url='/pokemon/:name' component='pokemon-list' />  url with params*/}
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }

}
