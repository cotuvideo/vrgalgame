#pragma strict

public var text: TextMesh;
public var sound00: AudioClip;
public var sound01: AudioClip;
public var cnt : int = 0;

function Start () {
	
}

function Update () {
	
}

function OnPointerEnter()
{
	Debug.Log("enter");
	Global.anim.SetBool("Next", true);
	if(++cnt%2 == 1)
	{
		text.text = "ｘｘｘするぅ？";
		GetComponent.<AudioSource>().PlayOneShot(sound00);
	}
	else
	{
		text.text = "のんのん";
		GetComponent.<AudioSource>().PlayOneShot(sound01);
	}
}

function OnPointerExit()
{
	Debug.Log("exit");
}
