---
title: Design a game
description: Design a game
---

If you wish to create a classification game from scratch, you can select
<kbd class="kbd">Design a Game</kbd> from the [Homepage](/docs/sorbet/home-page).

By selecting this option, you will enter SorBET's **Design Mode**, where you can
find affordances for designing a classification game. The main tool is an
interactive database for designing the game objects and categories,
which is initially empty.

The **columns correspond to the categories** of the game, and the **rows correspond
to the objects** to be classified in the game.

![Interactive database in the Design Mode of SorBET](@/assets/images/sorbet/sorbet_5_1.png)
_Figure 21: Interactive database in the Design Mode of SorBET_

## Adding, removing and renaming a category

The categories of the game are represented by the **columns** of the database.

![The categories while designing a game](@/assets/images/sorbet/sorbet_5_2.png)
_Figure 22: The categories while designing a game_

On the top right of Figure 22, the
<span class="bg-teal-400 select-none font-bold leading-none rotate-45 text-white aspect-square inline-flex justify-center items-center size-6 rounded-full">⨉</span>
means "add a new column to the table" (new category). Accordingly, the
<span class="bg-red-500 select-none font-bold leading-none text-white aspect-square inline-flex justify-center items-center size-6 rounded-full">⨉</span>
means "remove the selected columns". Select one or more columns by clicking on the
white checkbox by their name.

![Removing selected category while designing a game](@/assets/images/sorbet/sorbet_5_3.png)
_Figure 23: Removing selected category while designing a game_

You can change the name of a category by clicking on the name field of the column
(e.g. "Field3") and typing the name of the category you want (e.g. "summer").

## Adding, removing and modifying an object

The game's objects are represented by the rows of the database.

![The objects while designing a game](@/assets/images/sorbet/sorbet_5_4.png)
_Figure 24: The objects while designing a game_

On the top left of Figure 24, the
<span class="bg-teal-400 select-none font-bold leading-none rotate-45 text-white aspect-square inline-flex justify-center items-center size-6 rounded-full">⨉</span>
means "add a new row to the table" (new object).

Accordingly, the
<span class="bg-red-500 select-none font-bold leading-none text-white aspect-square inline-flex justify-center items-center size-6 rounded-full">⨉</span>
means "remove the selected rows". To select one or
more rows, click on the white checkbox next to their name.

![Removing selected objects while designing a game](@/assets/images/sorbet/sorbet_5_5.png)
_Figure 25: Removing selected objects while designing a game_

For defining the objects, there is the option to be simple text or image.

![Available options for defining objects](@/assets/images/sorbet/sorbet_5_6.png)
_Figure 26: Available options for defining objects_

By selecting the **text** option, you can fill in the textbox
<span class="border text-sm select-none rounded-sm pl-1 pr-8 inline-flex">sometext</span>
with the word or sentence you wish to add as an object.

By selecting the **image** option, and secondly pressing <kbd class="kbd">Choose</kbd>
your device's file management window appears, from which youcan select
a specific image file that you wish to add as an object.
Supports <code>.jpg</code>, <code>.ico</code> and <code>.png</code> file types

<div role="alert" class="alert shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <div class="!m-0">The image should already be stored in your device.</div>
</div>

![Choose button for the Image object type](@/assets/images/sorbet/sorbet_5_7.png)
_Figure 27: “Choose” button in the "Image" object category_

Next to each object there is an integer number field. This integer refers to the
number of instances of each object that will appear during the game at a random
time and order.

![Modify an object’s number of instances](@/assets/images/sorbet/sorbet_5_8.png)
_Figure 28: Modify an object’s number of instances_

## Assigning objects to categories

Once you have added the objects and categories as rows and columns,
you have to choose which category each object corresponds to.
You can choose from zero to all categories, depending on the type of game,
by clicking on the corresponding checkbox that connects the column (category) to
the row (object).

<div role="alert" class="alert shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <div class="!m-0">The matching that is done at this stage of the game design is what will determine the correct classifications during gameplay.</div>
</div>

![Example of assigning objects to categories](@/assets/images/sorbet/sorbet_5_9.png)
_Figure 29: Example of assigning objects to categories_

## Test and save the game

Once you complete the design of the game, you can either play it directly by
clicking <kbd class="kbd bg-green-600 text-white">Play</kbd>,
or save it to your device as a <code>.json</code> file by clcking
<kbd class="kbd bg-blue-600 text-white !m-0">Download</kbd>.

![SorBET Edit environment showing "Play" & "Download" buttons](@/assets/images/sorbet/sorbet_5_10.png)
_Figure 30: SORBET Edit environment showing "Play" & "Download" buttons_

Before downloading, the system asks you to provide a name to the game you just
designed.

![Name-giving box](@/assets/images/sorbet/sorbet_5_11.png)
_Figure 31: Name-giving box_

This way, the game you just designed will be stored locally on your device. To play it
later at SorBET, follow the procedure described in [Load your game](/docs/sorbet/play-the-game#load-your-game).