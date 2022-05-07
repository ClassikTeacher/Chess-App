import React, { useEffect, useMemo, useState } from "react";
import Rook_w from '../componets/UI/rook/Rook_w'
import Rook_b from '../componets/UI/rook/Rook_b'
import Pawn_w from '../componets/UI/pawn/Pawn_w'
import Pawn_b from '../componets/UI/pawn/Pawn_b'
import Knight_w from '../componets/UI/knight/knight_w'
import Knight_b from '../componets/UI/knight/knight_b'
import Bishop_w from "../componets/UI/bishop/Bishop_w";
import Bishop_b from "../componets/UI/bishop/Bishop_b";
import King_w from "../componets/UI/king/King_w";
import King_b from "../componets/UI/king/King_b";
import Queen_w from "../componets/UI/queen/Queen_w";
import Queen_b from "../componets/UI/queen/Queen_b";

export const arrBoard = ([
    [{color: 'black', free:false, firstIndex:'a1', figure:<Rook_w/>}, {color: 'white', free:false, firstIndex:'b1', figure:<Knight_w/>}, {color: 'black', free:false, firstIndex:'c1', figure:<Bishop_w/>}, {color: 'white', free:false, firstIndex:'d1', figure:<Queen_w/>}, {color: 'black', free:false, firstIndex:'e1', figure:<King_w/>}, {color: 'white', free:false, firstIndex:'f1', figure:<Bishop_w/>}, {color: 'black', free:false, firstIndex:'g1', figure:<Knight_w/>}, {color: 'white', free:false, firstIndex:'h1', figure:<Rook_w/>}],
    [{color: 'white', free:false, firstIndex:'a2', figure:<Pawn_w/>}, {color: 'black', free:false, firstIndex:'b2', figure:<Pawn_w/>}, {color: 'white', free:false, firstIndex:'c2', figure:<Pawn_w/>}, {color: 'black', free:false, firstIndex:'d2', figure:<Pawn_w/>}, {color: 'white', free:false, firstIndex:'e2', figure:<Pawn_w/>}, {color: 'black', free:false, firstIndex:'f2', figure:<Pawn_w/>}, {color: 'white', free:false, firstIndex:'g2', figure:<Pawn_w/>}, {color: 'black', free:false, firstIndex:'h2', figure:<Pawn_w/>}],   
    [{color: 'black', free:true, firstIndex:'a3', figure:undefined}, {color: 'white', free:true, firstIndex:'b3', figure:undefined}, {color: 'black', free:true, firstIndex:'c3', figure:undefined}, {color: 'white', free:true, firstIndex:'d3', figure:undefined}, {color: 'black', free:true, firstIndex:'e3', figure:undefined}, {color: 'white', free:true, firstIndex:'f3', figure:undefined}, {color: 'black', free:true, firstIndex:'g3', figure:undefined}, {color: 'white', free:true, firstIndex:'h3', figure:undefined}],
    [{color: 'white', free:true, firstIndex:'a4', figure:undefined}, {color: 'black', free:true, firstIndex:'b4', figure:undefined}, {color: 'white', free:true, firstIndex:'c4', figure:undefined}, {color: 'black', free:true, firstIndex:'d4', figure:undefined}, {color: 'white', free:true, firstIndex:'e4', figure:undefined}, {color: 'black', free:true, firstIndex:'f4', figure:undefined}, {color: 'white', free:true, firstIndex:'g4', figure:undefined}, {color: 'black', free:true, firstIndex:'h4', figure:undefined}], 
    [{color: 'black', free:true, firstIndex:'a5', figure:undefined}, {color: 'white', free:true, firstIndex:'b5', figure:undefined}, {color: 'black', free:true, firstIndex:'c5', figure:undefined}, {color: 'white', free:true, firstIndex:'d5', figure:undefined}, {color: 'black', free:true, firstIndex:'e5', figure:undefined}, {color: 'white', free:true, firstIndex:'f5', figure:undefined}, {color: 'black', free:true, firstIndex:'g5', figure:undefined}, {color: 'white', free:true, firstIndex:'h5', figure:undefined}],
    [{color: 'white', free:true, firstIndex:'a6', figure:undefined}, {color: 'black', free:true, firstIndex:'b6', figure:undefined}, {color: 'white', free:true, firstIndex:'c6', figure:undefined}, {color: 'black', free:true, firstIndex:'d6', figure:undefined}, {color: 'white', free:true, firstIndex:'e6', figure:undefined}, {color: 'black', free:true, firstIndex:'f6', figure:undefined}, {color: 'white', free:true, firstIndex:'g6', figure:undefined}, {color: 'black', free:true, firstIndex:'h6', figure:undefined}], 
    [{color: 'black', free:false, firstIndex:'a7', figure:<Pawn_b/>}, {color: 'white', free:false, firstIndex:'b7', figure:<Pawn_b/>}, {color: 'black', free:false, firstIndex:'c7', figure:<Pawn_b/>}, {color: 'white', free:false, firstIndex:'d7', figure:<Pawn_b/>}, {color: 'black', free:false, firstIndex:'e7', figure:<Pawn_b/>}, {color: 'white', free:false, firstIndex:'f7', figure:<Pawn_b/>}, {color: 'black', free:false, firstIndex:'g7', figure:<Pawn_b/>}, {color: 'white', free:false, firstIndex:'h7', figure:<Pawn_b/>}],
    [{color: 'white', free:false, firstIndex:'a8', figure:<Rook_b/>}, {color: 'black', free:false, firstIndex:'b8', figure:<Knight_b/>}, {color: 'white', free:false, firstIndex:'c8', figure:<Bishop_b/>}, {color: 'black', free:false, firstIndex:'d8', figure:<Queen_b/>}, {color: 'white', free:false, firstIndex:'e8', figure:<King_b/>}, {color: 'black', free:false, firstIndex:'f8', figure:<Bishop_b/>}, {color: 'white', free:false, firstIndex:'g8', figure:<Knight_b/>}, {color: 'black', free:false, firstIndex:'h8', figure:<Rook_b/>}], 
  ])

