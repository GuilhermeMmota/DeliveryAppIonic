import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatedAccountPage } from './created-account.page';

describe('CreatedAccountPage', () => {
  let component: CreatedAccountPage;
  let fixture: ComponentFixture<CreatedAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatedAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
