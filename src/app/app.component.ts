import {Component} from '@angular/core';

@Component({
    selector:'app-code',
    template:`<div>
                    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    <!-- Brand -->
                      <a class="navbar-brand" href="#">Angular5</a>

                      <!-- Toggler/collapsibe Button -->
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                    <!-- Links -->
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link" [routerLink]="['/home']">Home</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link"[routerLink]="['/music']">Music</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link"[routerLink]="['/movies']">Movies</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link"  [routerLink]="['/products']">Product</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link"[routerLink]="['/orders']">Order</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link"[routerLink]="['/forms']">Admin</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                <div class="container">
                  <router-outlet></router-outlet>
                </div>
              </div>
       `
})

export class AppComponent{

}

/*
One Way Binding
--Data Binding {{}}
--Property Binding []
--Event Binding ()
Two Way Binding [()]



src="../assets/covers/{{movie.cover}}.jpg"
*/
