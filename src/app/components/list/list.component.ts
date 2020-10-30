import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectSelectedList} from '../../root-store/lists/lists.selector';
import {selectSelectedItems} from '../../root-store/items/items.selector';
import {Item} from '../../models/item.model';
import {Observable} from 'rxjs';
import {List} from '../../models/list.model';
import {ItemUpdateRequestAction} from '../../root-store/items/items.actions';
import {CreationList} from '../../models/creation-list.model';
import {filter, take, withLatestFrom} from 'rxjs/operators';
import {MatInput} from '@angular/material/input';
import {ListUpdateRequestAction} from '../../root-store/lists/lists.actions';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ListService} from '../../services/list.service';
import {ListAsyncValidator} from './list.async-validator';
import {SignUpAsyncValidator} from '../sign-up/sign-up.async-validator';

@Component({
  selector: 'app-list-display',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() list: CreationList;

  readonly list$: Observable<List> = this.store.select(selectSelectedList);
  readonly items$: Observable<Item[]> = this.store.select(selectSelectedItems);

  listFormGroup = this.formBuilder.group({
    initialName: '',
    name: ['', Validators.required],
    id: '',
  }, {asyncValidators: ListAsyncValidator.checkName(this.listService)});

  editMode = false;

  constructor(private store: Store, private listService: ListService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  toggleItemDone(item: Item) {
    this.store.dispatch(new ItemUpdateRequestAction({
      item: {
        id: item.id,
        changes: {
          done: !item.done
        }
      }
    }));
  }

  /**
   * listName is given as a parameter here so we keep the sync if the user
   * change the input but give up the edition of the name.
   * @param name
   * @param id
   */
  goEditMode(name: string, id: string) {
    this.editMode = true;
    this.listFormGroup.patchValue({name, id, initialName: name});
    // this.nameInput.nativeElement.setSelectionRange(0, this.nameInput.nativeElement.value.length);
  }

  updateListName() {
    if (this.listFormGroup.valid) {
      const {name, id, initialName} = this.listFormGroup.value;

      if (name !== initialName) {
        this.store.dispatch(new ListUpdateRequestAction({
          list: {
            id,
            changes: {name}
          },
        }));
      }

      this.leaveEditMode();
    }
  }

  leaveEditMode() {
    this.editMode = false;
  }
}
