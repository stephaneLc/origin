#pragma strict
/**
* Script de gestion des comportements spécifiques au niveau du boss 1.
* @author David Lachambre
* @update 14-02-2016
*/

/*
* Position de départ du héros dans le niveau du boss 1
* @access private
* @var Vector3
*/
private var positionDepartHeros:Vector3 = new Vector3(9,24,-30);

/*
* Le héros
* @access private
* @var GameObject
*/
private var heros: GameObject;


function Start () {
    
    if (PlayerPrefs.GetInt("partieSauvegardee") == 0) {
        heros = GameObject.FindWithTag("heros");
        heros.transform.position = positionDepartHeros;//Replace le héros en position de départ au chargement du niveau.
    }
}