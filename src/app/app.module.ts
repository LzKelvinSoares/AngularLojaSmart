import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData, CurrencyPipe } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';

registerLocaleData(localePtBr, 'pt-BR');
import { AppComponent } from './app.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductAlertsComponent } from './Components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ShippingComponent } from './Components/shipping/shipping.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'cart', component: CartComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  providers: [
    {
      provide: localePtBr,
      useValue: "pt"
    }
  ],
  declarations: [
    AppComponent,
    CartComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ShippingComponent,
    TopBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

