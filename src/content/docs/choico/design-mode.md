---
title: Design a New Game – Design Mode
description: Design a New Game – Design Mode
---

If you want to create a new game from scratch, you can select the option
<kbd class="kbd">Design a game</kbd> from the Home Page. By making this selection, you enter
ChoiCo's design mode. The design mode consists of four separate tabs that represent
the different elements of the game you will be designing.

These tabs are:

1. **Game Interface**<br>
   This is where you design your game interface. This means you can edit the scene,
   add and modify points on it and set the consequences of each point.

2. **Initial Settings**<br>
   This is where you set the initial state of the game (e.g. starting values of fields).

3. **Game Rules**<br>
   In this tab, you define the rules according to which the game will work (e.g. warning
   messages).

4. **End Rules**<br>
   In this tab, you define the conditions that will end the game (e.g. if one or more
   fields get an extreme value).

In tabs 2,3 and 4, the design is realized by tile commands (Blockly Programming
Language). The functions of each tab are described below in detail.

## 1<sup>st</sup> Tab - Game Interface

In this tab you can find:

1. the **Scene** of the game in which there is the background (by default a city map) and

2. an empty **Database**, as shown below

![Game in Design Mode – Game Interface Tab](@images/choico/choico_4_1.png)
_Figure 14: Game in Design Mode – Game Interface Tab_

### Scene Editing

The scene simulates the theme of the game and it is the main element the player
interacts with while making choices.

![Game Interface Toolbar](@images/choico/choico_4_2.png)
_Figure 15: Game Interface Toolbar_

#### Change Scene Background

If you want to change the background of the scene, click on
<img class="!inline align-middle" src="/docs/img/scene-selection-icon.png" width="28">
in the toolbar to the left of the scene. Then, you can select any image that is
stored on your device and click OK. The image will be automatically added and
adjusted as the background of the scene.

#### Add & Edit Layers

A game scene in ChoiCo can consist of several layers. All games have an initial
layer called "Main". However, there is the possibility to create new layers which can
act as different "regions" of a game.

Every layer has the following characteristics:

-   Its name
-   Its points
-   Its background

Layers can be managed by clicking on the scene toolbox button which opens the
window below. This window displays a list of all available game layers, as well as
the option to add a new layer.

![Manage Game Layers](@images/choico/choico_4_3.png)
_Figure 16: Manage Game Layers_

**Add new layer**

To add a new layer, click on <kbd class="kbd">Select File</kbd> and select an image from your
computer which will be the background of the new layer. The new layer will be
automatically added to the list, which will have -as its name- the name of the file
of the image you loaded (e.g. citymap.jpg). This layer will not have any points.

**Change layer name**

If you want to change the name of a layer, select it from the list of layers and press
<kbd class="kbd">Rename Layer</kbd>. Then, type the new name you want. The
"Main" layer cannot be renamed.

**Delete layer**

In order to delete a layer, select it from the list of layers and press
<kbd class="kbd">Delete Layer</kbd>.
This action will delete the layer along with all its points.

**Switch between layers**

Toggling between the available game layers in the design mode can be done via
the button in the top right corner of the scene. This way you can change
the background and add points to each layer individually.

![Switching layers](@images/choico/choico_4_4.png)
_Figure 17: Switching layers_

#### Add & Modify Points on the Scene

To **add** new points to the scene of any layer, click on
<img class="!inline" src="/docs/img/addPoint.png" width="28">
from the toolbar on the left of the scene (Figure 15). By selecting this icon, you
activate the "insert points" function and by clicking anywhere in the scene you can
add a new point. After you have finished inserting the points, you need to reclick on
<img class="!inline" src="/docs/img/addPoint.png" width="28">
the to return to the original state of the scene.

To **delete** a point you should right-click on it and select
<kbd class="kbd">Delete point</kbd>.

![Delete point from the Scene](@images/choico/choico_4_5.png)
_Figure 18: Delete point from the scene_

You can **move** a point in the same scene by clicking on it and dragging it to a new
position within the scene. To move it to a different layer, right-click on it and select
<kbd class="kbd">Point Settings</kbd>. In the window that appears there is a list of available
layers and the layer the point belongs to is selected. You can select another layer
and click <kbd class="kbd">OK</kbd>. The point will automatically be moved to the selected layer.

#### Game Instructions

By clicking on <img class="!inline align-text-bottom" src="/docs/img/instructions.png" width="28">,
a pop-up window appears where you can write a text for the players,
related to the instructions concerning the game.

![Writing Game Instructions](@images/choico/choico_4_6.png)
_Figure 20: Writing Game Instructions_

### Database

When you add a new point on the scene, the system automatically inserts a new
**line** into the Database. This line represents that point and allows you
to change its properties. All points have common attributes, which correspond to
the **columns** in the table.

By default, there are 4 fields.: _ID_, _Description_, _Field1_, _Field2_.

![Database](@images/choico/choico_4_7.png)
_Figure 21: Database_

The **ID** is a unique number for each point and cannot be deleted or modified. The
**Description** field refers to the name of the point, which will also be displayed on
the Scene.

The names of the other attributes (Field1, Field2...) can be changed.

#### Adding/Removing new attribute

To **add** a new attribute for the game points, you need to click on the board’s
<img class="!inline align-text-bottom" src="/docs/img/add.png" width="28">
button. The new attribute will be added as a new column in the Table.
To change the name of the property, just click on its name.

![How to add a new attribute](@images/choico/choico_4_8.png)
_Figure 22: How to add a new attribute_

To **delete** an attribute, first select its column by clicking on the small box next to
its name. Next, click on <img class="!inline align-text-bottom" src="/docs/img/delete.png" width="28">
, on top of the table. **_ID_** and **_Description_** cannot be deleted.

![How to delete an attribute](@images/choico/choico_4_9.png)
_Figure 23: How to delete an attribute_

#### How to change the type of a property

Select the property you wish to change and then click on
<img class="!inline align-text-bottom" src="/docs/img/settings.png" width="28">

Each property is identified by a data type. The data type determines how the
property will be displayed and what the "function" of the property will be. The
available types are as follows:

-   **Number**: accepts only numeric values
-   **Text**: Accepts alphanumeric characters (text + numbers)
-   **Image**: Allows you to add an image from your device by pressing the <kbd class="kbd">Choose</kbd> button
-   **Date**: Accepts values in <code>dd/mm/yyyy</code> format.
-   **Link**: accepts a connection with an external source, e.g. YouTube video, by pasting the corresponding URL.
-   **Formula**: It allows you to create mathematical relationships between the properties of fields.

    **Formulas examples**:

    -   By writing <code>rand(0,10)</code> in the field of a property, a random
        value from 0 to 10 will appear in the corresponding property
        every time the player selects that point.
    -   The value of an attribute can be written in relation to the
        value of another property, e.g. if a game has the attributes
        **Money** and **Fun**, the **Fun** field can contain the formula:
        <code>money\*2</code>, so the value of the variable **Money** will be used.

You can see the available mathematical **Formulas** in detail [here](https://mathnotepad.com/docs/overview.html)

The default type for each property is **Number**. To change the type, select the
property from the box next to its name and then click on
<img class="!inline align-text-bottom" src="/docs/img/settings.png" width="28">,
located at the top left of the table. In the pop-up window you can select one of the above
types. The type of the "Description" property is set to "Text" and cannot be
changed.

#### How to assign values to the attributes of each point

You can set the attribute values for each point by clicking on the corresponding
white box in the row of each point. Depending on the type of attribute there may
be restrictions on the values. For example, attributes of **Number** type accept
only numeric values.

## 2<sup>nd</sup> tab - Initial Settings

After setting the fields and their properties in the first tab, you can then set the
initial values of the numeric fields in the **Initial settings** tab, where you define
how the game starts. There you'll find a Block-based programming area. On the
left, there's a sidebar with the available blocks, which you can drag into the
workspace on the right and start creating the game.

The available Blocks here are divided into 3 different categories
depending on their functionalities which are:

-   Initialize
-   Game Actions
-   Map Actions

![Sidebar and workspace of the "Initial settings" tab](@images/choico/choico_4_10.png)
_Figure 25: Sidebar and workspace of the "Initial settings" tab_

When you access this tab for the first time, only two initialization property blocks
that have been set as an example will be displayed. To add initial values, select the
<code class="rounded !bg-[#a35c7f] text-white">Set Field ... to ...</code>
block from the sidebar. and drag it into
<code class="rounded !bg-[#995ba4] text-white">On game start</code>.

Then, by clicking on the property name from the drop-down list, you select the
property you want to initialize. The default value given to all properties is `0`.
You can change this value by clicking inside the blue box containing the numeric
value of the property.

![Example of initial setup code - Covid Survival game](@images/choico/choico_4_11.png)
_Figure 26: Example of initial setup code - Covid Survival game_

<div class="alert">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>
        All <code class="rounded !bg-[#a35c7f] text-white">Set Field...</code>
        blocks must be within the <code class="rounded !bg-[#995ba4] text-white">On game start</code> block.<br>
        You must set the initial value for each numeric field you have created in the game.
    </span>
</div>

For a more detailed description of these blocks see:<br>
[Initialize block](/docs/choico/choico-blocks#initialize)<br>
[Game Actions block](/docs/choico/choico-blocks#game-actions)<br>
[Map Actions block](/docs/choico/choico-blocks#map-actions)

## 3<sup>rd</sup> Tab - Gameplay Rules

In the 3<sup>rd</sup> tab you can program the rules for the game that will be triggered every
time the player selects a point. The code programmed here will be executed
every time the player selects a point and the result will be displayed automatically.
Similar to the 2nd tab, this tab contains a workspace for Block programming and a
sidebar with available blocks.

The available Blocks here are divided into four different categories depending on
their functionality, which can be:

-   Conditionals
-   Variables
-   Math
-   Game Actions
-   Map Actions

![Example of available commands on the Gameplay tab](@images/choico/choico_4_12.png)
_Figure 27: Example of available commands on the Gameplay tab_

The figure below shows an example of rules programmed in the <code>Gameplay Rules</code> tab. In this
example, after the player makes a selection, the game will check if <code class="rounded !bg-[#a35c7f] text-white">Covid_Risk</code>
is greater than or equal to <code>70</code> and, if it is, a pop-up window will appear with
the message *"You got close to a confirmed Covid case. Please be careful!!!!!_". After
that, it will check if <code class="rounded !bg-[#a35c7f] text-white">Money</code> is less than or equal to <code>15</code> and if it is, it will
display the message _"You're running out of money..."\_.

![Example of gameplay rules code - Covid Survival Game](@images/choico/choico_4_13.png)
_Figure 28: Example of gameplay rules code - Covid Survival Game_

In the example below, the code checks if the selected field is Enter Home,
<code class="rounded !bg-[#5b80a5] inline-block py-2 text-white">
if selectedChoice.name ==
<code class="rounded !bg-[#bdccdb] text-neutral">Enter Home</code>
</code><br>
and if it is, sets the active layer to
<code class="rounded !bg-[#dbd4bd] text-neutral">bedroom</code>.
In addition, the code checks if <code class="rounded !bg-[#bdccdb] text-neutral whitespace-nowrap">Exit home</code>
is selected and if it is, the player is moved back to the main layer.

![Example of gameplay rules code - Covid Survival Game](@images/choico/choico_4_14.png)
_Figure 29: Example of gameplay rules code - Covid Survival Game_

For a more detailed description of these blocks see:<br>
[Conditions block](/docs/choico/choico-blocks#conditions)<br>
[Variables block](/docs/choico/choico-blocks#variables)<br>
[Math block](/docs/choico/choico-blocks#maths)

## 4<sup>th</sup> Tab - End rules

In the 4<sup>th</sup> tab you can program the rules for ending the game. The code
programmed here will be executed every time the player selects a point, after the
control conditions code, and the result will be displayed automatically. Similar to
**Tab 2** and **Tab 3**, this tab contains a workspace for Block programming and a sidebar
with available Blocks.

![Available commands on the End Rules tab](@images/choico/choico_4_15.png)
_Figure 30: Available commands on the End Rules tab_

The Blocks available here are divided into five different categories
depending on their functionality:

-   Conditionals
-   Variables
-   Maths
-   Game & Map Actions
-   Game Flow

The figure below shows an example of termination rules programmed in the 4<sup>th</sup> tab. Each
time the player makes a choice, the code first checks if his physical state is lower
than <code>5</code>. If it is, a pop-up window appears with the message
_"Your physical state is really bad!..."_ and the game ends.
After, it checks if <code class="rounded !bg-[#a35c7f] text-white">Covid_Risk</code>
is above <code>90</code> and if so, a pop-up window appears with the message
*"You need to work out..."_ and the game ends. Then checks if
<code class="rounded !bg-[#a35c7f] text-white">Covid_Risk</code> is <code>90</code> and if so,
a pop-up window appears with the message _"You've got Covid! Game is over"\_ and the game ends.

![Example of programming on the End Rules tab](@images/choico/choico_4_16.png)
_Figure 31: Example of programming on the End Rules tab_

<div role="alert" class="alert alert-warning">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  <span>You <b>must</b> use the <code class="rounded !bg-[#a35c7f] text-white">GameOver</code> block to end the game.</span>
</div>

More information about managing the available blocks can be found at
[Programming with Blocks](/docs/choico/programming-with-blocks)

## Test & Save the game

![Test & Save Game](@images/choico/choico_4_17.png)
_Figure 32: Test & Save Game_

Once you have completed the game design, you can either:

-   play it directly, by clicking <kbd class="kbd bg-green-600 text-white">Play</kbd> (figure above), without saving
    it, continuing if you wish to edit it afterwards.
-   save it on your device as a file with a <code>.choico</code> format by clicking <kbd class="kbd">Save</kbd>.
    Before downloading, through a pop-up window, you are asked to give a name to the
    game you just designed (figure below).

![New or modified game naming pop-up window](@images/choico/choico_4_18.png)
_Figure 33: New or modified game naming pop-up window_

## Button actions in Design Mode

|                       Button                       |                                              Action                                              |
| :------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
|   ![play button](@images/choico/choico_4_19.png)   |                               Play the game, after modifications.                                |
| ![download button](@images/choico/choico_4_20.png) |                                   Save a new or modified game.                                   |
|  ![debug button](@images/choico/choico_4_21.png)   | Display a pop-up window with a report of programming errors that may have been made in the code. |
