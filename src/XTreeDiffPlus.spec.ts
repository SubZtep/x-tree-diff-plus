/* --------------------------------------------------------------------------*
 * Description:                                                              *
 *                                                                           *
 * File Created: Thursday, 26th December 2019 9:05 pm                        *
 * Author: yidafu(dov-yih) (me@yidafu.dev)                                   *
 *                                                                           *
 * Last Modified: Thursday, 26th December 2019 9:05 pm                       *
 * Modified By: yidafu(dov-yih) (me@yidafu.dev>)                             *
 *                                                                           *
 * Copyright 2019 - 2019 Mozilla Public License 2.0                          *
 *-------------------------------------------------------------------------- */

import XTreeDiffPlus from './XTreeDiffPlus';
import EditOption from './EditOption';
import { createTree1, createTree2, createTree3, createTree5, createTree4} from '../test/three-nodes';
// import createTree1 from '../test/tree1';
// import createTree2 from '../test/tree2';
// import createTree3 from '../test/tree3';
import XTree from './XTree';

class DefaultXTreeDiff extends XTreeDiffPlus<XTree> {
  public buildXTree(tree: XTree) {
    return tree;
  }
  
  public dumpXTree(xTree: XTree): XTree {
    return xTree;
  }
}

describe('three nodes', () => {
  test('modify the second children node compared with tree1', () => {
    const oldTree = createTree1();
    const newTree = createTree2();
    const xTreeDiff = new DefaultXTreeDiff(oldTree, newTree);
    xTreeDiff.diff();
    expect(oldTree.Op).toBe(EditOption.NOP);
  });

  test('tree5 modify the second children node compared with tree4', () => {
    const oldTree = createTree4();
    const newTree = createTree5();
    const xTreeDiff = new DefaultXTreeDiff(oldTree, newTree);
    xTreeDiff.diff();
    expect(oldTree.Op).toBe(EditOption.NOP);
    expect(oldTree?.getChild(0)?.Op).toBe(EditOption.NOP)
    expect(oldTree?.getChild(1)?.Op).toBe(EditOption.UPD)
  });
});

// describe('xTreeDiff', () => {
//   test('node delete/insert/update', () => {
//     const T_old = createTree1();
//     const T_new = createTree2();
//     const xTreeDiff = new DefaultXTreeDiff(T_old, T_new);
//     xTreeDiff.diff();
//     console.log(T_old)
//     expect(T_old.nPtr).toBe(T_new);
//       expect(T_old.getChild(0)?.getChild(1)?.getChild(1)?.Op).toBe(EditOption.DEL);
//       expect(T_new.getChild(0)?.getChild(1)?.getChild(1)?.Op).toBe(EditOption.INS);
//       expect(T_new.getChild(0)?.getChild(1)?.getChild(0)?.Op).toBe(EditOption.UPD);
//   });

//   test('node moved', () => {
//     const T_old = createTree1();
//     const T_new = createTree3();
//     const xTreeDiff = new DefaultXTreeDiff(T_old, T_new);
//     xTreeDiff.diff();
//     expect(T_old.nPtr).toBe(T_new);
//     expect(T_old.getChild(0)?.getChild(1)?.Op).toBe(EditOption.MOV);
//     expect(T_new.getChild(1)?.getChild(0)?.Op).toBe(EditOption.MOV);
//   });
// });
