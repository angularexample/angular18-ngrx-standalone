import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from "rxjs";
import { XxxContent } from "../xxx-common/xxx-content/xxx-content.types";
import { XxxContentComponent } from '../xxx-common/xxx-content/xxx-content.component';
import { XxxContentFacadeService } from "../xxx-common/xxx-content/xxx-content-facade.service";
import { XxxUser } from "./xxx-user.types";
import { XxxUserFacadeService } from "./xxx-user-facade.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AsyncPipe,
    XxxContentComponent,
  ],
  selector: 'xxx-user',
  standalone: true,
  templateUrl: './xxx-user.component.html',
})
export class XxxUserComponent {
  protected readonly contentKey: string = 'user';
  private contentFacade: XxxContentFacadeService = inject(XxxContentFacadeService);
  protected readonly content$: Observable<XxxContent | undefined> = this.contentFacade.contentByKey$(this.contentKey);
  private userFacade: XxxUserFacadeService = inject(XxxUserFacadeService);
  protected readonly isUsersEmpty$: Observable<boolean> = this.userFacade.isUsersEmpty$;
  protected readonly isUsersLoaded$: Observable<boolean> = this.userFacade.isUsersLoaded$;
  protected readonly isUsersLoading$: Observable<boolean> = this.userFacade.isUsersLoading$;
  protected readonly selectedUserId$: Observable<number | undefined> = this.userFacade.selectedUserId$;
  protected readonly users$: Observable<XxxUser[]> = this.userFacade.users$;

  constructor() {
    this.contentFacade.getContent(this.contentKey)
    this.userFacade.showUsers();
  }

  protected rowClick(user: XxxUser): void {
    this.userFacade.selectUser(user.id);
  }
}
