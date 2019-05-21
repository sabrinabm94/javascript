import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GifListComponent } from './gif-list.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('GifListComponent', () => {
  let component: GifListComponent;
  let fixture: ComponentFixture<GifListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        GifListComponent 
      ],
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(GifListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('try create the component', () => {
    expect(component).toBeTruthy();
    expect(component).not.toBeNull();
  });

  it('search for html tag', () => {
    component.gifs = [
      {
        id: "1",
        url: "localhost",
        images: {
          fixed_height: {
            url: "localhost/01.gif"
          }
        }
      }, 
      {
        id: "2",
        url: "localhost",
        images: {
          fixed_height: {
            url: "localhost/02.gif"
          }
        }
      },
    ];

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      //verifica se será renderizado 2 tags a
      let debugElement:DebugElement[] = fixture.debugElement.queryAll(By.css('a'));
      expect(debugElement.length).toBe(2);
    });
  });
});
